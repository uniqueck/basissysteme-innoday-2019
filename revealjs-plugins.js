{ src: 'revealjs-plugins/menu/menu.js', async: true },
{ src: 'revealjs-plugins/chalkboard/chalkboard.js', async: true },
{ src: 'revealjs-plugins/title-footer/title-footer.js', callback: function() { title_footer.initialize(); } },//not async because it may then not appear
{ src: 'revealjs-plugins/notes-pointer/notes-pointer.js', async: true },
{ src: 'revealjs-plugins/skip-fragments/skip-fragments.js' }