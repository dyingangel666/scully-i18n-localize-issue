# Steps to reproduce

- npm run build
- npm run scully:de

Check the html files in the static folder generated by scully, there's just the <sg-root> element without the content of the pages.

If you run all with a default angular build without localize it works

- ng build --prod
- scully --cf scully.single.config.js

