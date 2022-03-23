let Details = require('sew-queen-pro/sources/dc/Details');
let Main = require('./Menus/_Default')
var DOWNLOADCMD = Main.DOWNLOADCMD;var LOGOCMD = Main.LOGOCMD;var PROFILECMD = Main.PROFILECMD;var ADMINCMD = Main.ADMINCMD;var AUDIOCMD = Main.AUDIOCMD;var VIDEOCMD = Main.VIDEOCMD;var IMAGECMD = Main.IMAGECMD;var DEEPAICMD = Main.DEEPAICMD



// example your layout 👇👇
// let yourlayout  = require('./Menus/removeall')

// exsample for add your own layout
/*

if(Details.CMD_LAYOUT == 'removeall') {

 DOWNLOADCMD = removeall.DOWNLOADCMD
 LOGOCMD = yourlayout.LOGOCMD
 PROFILECMD = yourlayout.PROFILECMD
 ADMINCMD = yourlayout.ADMINCMD
 AUDIOCMD = yourlayout.AUDIOCMD
 VIDEOCMD = yourlayout.VIDEOCMD
 IMAGECMD = yourlayout.IMAGECMD
 DEEPAICMD = yourlayout.DEEPAICMD
 
}

*/



module.exports = {DOWNLOADCMD: DOWNLOADCMD,LOGOCMD: LOGOCMD,PROFILECMD: PROFILECMD,ADMINCMD: ADMINCMD,AUDIOCMD: AUDIOCMD,VIDEOCMD: VIDEOCMD,IMAGECMD: IMAGECMD,DEEPAICMD: DEEPAICMD}
