# يحوّل scripts/shot.px.css (px) إلى em (÷14) ويضيفه آخر src/styles/global.css بدل النسخة القديمة.
import re
src = open('scripts/shot.px.css').read()
def conv(m): return f"{float(m.group(1))/14:.4g}em"
out = []
for line in src.split('\n'):
    if 'font-size: calc' in line or 'border-radius: 20px' in line or '@container' in line or 'padding: 5cqw' in line:
        out.append(line); continue
    line = re.sub(r'(?<![\w.#-])(?<!border: )(?<!border-bottom: )(?<!border-top: )(?<!border-inline-start: )(\d*\.?\d+)px(?!\s*solid)', conv, line)
    out.append(line)
p = 'src/styles/global.css'; s = open(p).read()
i = s.find('/* ===== DashShot')
if i >= 0: s = s[:i]
open(p, 'w').write(s.rstrip('\n') + '\n\n' + '\n'.join(out))
