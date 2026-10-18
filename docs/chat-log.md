# Chat learning log (free, optional)

Logs anonymous chatbot events (unanswered questions, matched topics, completed consultations, thumbs up/down) to a Google Sheet you own. Names, phones and emails typed in the lead flow are never logged, and numbers/emails inside questions are redacted.

## Setup (5 minutes)
1. Create a Google Sheet named "Chat log".
2. Extensions, then Apps Script. Paste the code below, save.
3. Deploy, New deployment, type Web app, Execute as: Me, Who has access: Anyone. Copy the Web app URL.
4. Put the URL in `src/config.ts` as `chatLogUrl` and redeploy.

```js
function doPost(e) {
  try {
    var d = JSON.parse(e.postData.contents);
    var sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('log') ||
      SpreadsheetApp.getActiveSpreadsheet().insertSheet('log');
    if (sh.getLastRow() === 0) sh.appendRow(['time', 'type', 'lang', 'session', 'entry_id', 'question', 'feedback', 'picks']);
    sh.appendRow([new Date(), d.t, d.lang, d.sid, d.id || '', d.q || '', d.v || '', d.picks || '']);
  } catch (err) {}
  return ContentService.createTextOutput('ok');
}
```

## Weekly routine (10 minutes)
- Filter `type = miss`: the most repeated questions are your next answers. Add them to `src/chatKB.ts`.
- Filter `type = fb` and `feedback = down`: rewrite those entries.
- Count `type = flow` per `entry_id` to see which service people ask about most.
