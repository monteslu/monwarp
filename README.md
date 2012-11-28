All future work has been moved to:
==================================

https://github.com/iceddev/frozen



Monwarp is an open source HTML5 game engine.


An example of its use can be found here:

http://azprogrammer.com/nge


An example of its box2d integration could be found in the source code for this Simple Pool Game:

https://chrome.google.com/webstore/detail/acjijhekaonkmkedfdabbageicfhhlgo


More documentation coming.  Promise :)


-Luis
=======

Firstly:
Since this is a dojo extension it requires dojo. I'm going to assume you already use dojo, and your site has a directory named "dojo". Your site should have a directory structure that looks roughly like:

/js
	/dojo
		/cldr
		/data
		/date
		/dnd
		/fx
		/io
		/nls
		/rsources
		/rpc
		/selector
		/store
		- dojo.js
		- other js files...

To install:
put the /src/mwe from the src/ folder into your dojo directory

To use:
here's a skeleton HTML file

<html>
<head>
<title></title>
<script 
	src="js/dojo/dojo.js" 
	djConfig="baseUrl: 'js/dojo/', modulePaths: {mwe: 'mwe'}">
</script>
</head>
<body>
<script>
	dojo.require('mwe.GameCore');
	dojo.require('mwe.Sprite');
	dojo.require('mwe.ResourceManager');
	dojo.require('mwe.GameAction');
</script>
</body>
</html>

This pulls in monwarp.

extra doc credit:
@davidsiaw