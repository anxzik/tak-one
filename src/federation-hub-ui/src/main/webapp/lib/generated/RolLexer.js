// Generated from rol/src/main/antlr/mil/af/rl/rol/Rol.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\'\u0159\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004",
    "*\t*\u0004+\t+\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0006\u001b\u00ff\n\u001b",
    "\r\u001b\u000e\u001b\u0100\u0003\u001c\u0003\u001c\u0003\u001c\u0007",
    "\u001c\u0106\n\u001c\f\u001c\u000e\u001c\u0109\u000b\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0005\u001d\u0110\n",
    "\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003",
    "\u001e\u0003\u001f\u0003\u001f\u0003 \u0005 \u011b\n \u0003 \u0003 ",
    "\u0003 \u0006 \u0120\n \r \u000e \u0121\u0003 \u0005 \u0125\n \u0003",
    " \u0005 \u0128\n \u0003 \u0003 \u0003 \u0003 \u0005 \u012e\n \u0003",
    " \u0005 \u0131\n \u0003!\u0003!\u0003!\u0007!\u0136\n!\f!\u000e!\u0139",
    "\u000b!\u0005!\u013b\n!\u0003\"\u0003\"\u0005\"\u013f\n\"\u0003\"\u0003",
    "\"\u0003#\u0003#\u0003$\u0003$\u0003%\u0003%\u0003&\u0003&\u0003\'\u0003",
    "\'\u0003(\u0003(\u0003)\u0003)\u0003*\u0003*\u0003+\u0006+\u0154\n+",
    "\r+\u000e+\u0155\u0003+\u0003+\u0002\u0002,\u0003\u0003\u0005\u0004",
    "\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015",
    "\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013",
    "%\u0014\'\u0015)\u0016+\u0017-\u0018/\u00191\u001a3\u001b5\u001c7\u001d",
    "9\u0002;\u0002=\u0002?\u001eA\u0002C\u0002E\u001fG I!K\"M#O$Q%S&U\'",
    "\u0003\u0002\u000b\b\u0002002;C\\^^aac|\u0004\u0002$$^^\n\u0002$$11",
    "^^ddhhppttvv\u0005\u00022;CHch\u0003\u00022;\u0003\u00023;\u0004\u0002",
    "GGgg\u0004\u0002--//\u0005\u0002\u000b\f\u000f\u000f\"\"\u0162\u0002",
    "\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002",
    "\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002",
    "\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002",
    "\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002",
    "\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002",
    "\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002",
    "\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002",
    "\u001f\u0003\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002\u0002",
    "#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002\u0002\u0002\u0002\'\u0003",
    "\u0002\u0002\u0002\u0002)\u0003\u0002\u0002\u0002\u0002+\u0003\u0002",
    "\u0002\u0002\u0002-\u0003\u0002\u0002\u0002\u0002/\u0003\u0002\u0002",
    "\u0002\u00021\u0003\u0002\u0002\u0002\u00023\u0003\u0002\u0002\u0002",
    "\u00025\u0003\u0002\u0002\u0002\u00027\u0003\u0002\u0002\u0002\u0002",
    "?\u0003\u0002\u0002\u0002\u0002E\u0003\u0002\u0002\u0002\u0002G\u0003",
    "\u0002\u0002\u0002\u0002I\u0003\u0002\u0002\u0002\u0002K\u0003\u0002",
    "\u0002\u0002\u0002M\u0003\u0002\u0002\u0002\u0002O\u0003\u0002\u0002",
    "\u0002\u0002Q\u0003\u0002\u0002\u0002\u0002S\u0003\u0002\u0002\u0002",
    "\u0002U\u0003\u0002\u0002\u0002\u0003W\u0003\u0002\u0002\u0002\u0005",
    "^\u0003\u0002\u0002\u0002\u0007e\u0003\u0002\u0002\u0002\tl\u0003\u0002",
    "\u0002\u0002\u000bs\u0003\u0002\u0002\u0002\rz\u0003\u0002\u0002\u0002",
    "\u000f\u0080\u0003\u0002\u0002\u0002\u0011\u008d\u0003\u0002\u0002\u0002",
    "\u0013\u0092\u0003\u0002\u0002\u0002\u0015\u009b\u0003\u0002\u0002\u0002",
    "\u0017\u009f\u0003\u0002\u0002\u0002\u0019\u00a9\u0003\u0002\u0002\u0002",
    "\u001b\u00b2\u0003\u0002\u0002\u0002\u001d\u00b6\u0003\u0002\u0002\u0002",
    "\u001f\u00c0\u0003\u0002\u0002\u0002!\u00d0\u0003\u0002\u0002\u0002",
    "#\u00db\u0003\u0002\u0002\u0002%\u00df\u0003\u0002\u0002\u0002\'\u00e3",
    "\u0003\u0002\u0002\u0002)\u00e7\u0003\u0002\u0002\u0002+\u00ea\u0003",
    "\u0002\u0002\u0002-\u00ee\u0003\u0002\u0002\u0002/\u00f0\u0003\u0002",
    "\u0002\u00021\u00f2\u0003\u0002\u0002\u00023\u00f7\u0003\u0002\u0002",
    "\u00025\u00fe\u0003\u0002\u0002\u00027\u0102\u0003\u0002\u0002\u0002",
    "9\u010c\u0003\u0002\u0002\u0002;\u0111\u0003\u0002\u0002\u0002=\u0117",
    "\u0003\u0002\u0002\u0002?\u0130\u0003\u0002\u0002\u0002A\u013a\u0003",
    "\u0002\u0002\u0002C\u013c\u0003\u0002\u0002\u0002E\u0142\u0003\u0002",
    "\u0002\u0002G\u0144\u0003\u0002\u0002\u0002I\u0146\u0003\u0002\u0002",
    "\u0002K\u0148\u0003\u0002\u0002\u0002M\u014a\u0003\u0002\u0002\u0002",
    "O\u014c\u0003\u0002\u0002\u0002Q\u014e\u0003\u0002\u0002\u0002S\u0150",
    "\u0003\u0002\u0002\u0002U\u0153\u0003\u0002\u0002\u0002WX\u0007e\u0002",
    "\u0002XY\u0007t\u0002\u0002YZ\u0007g\u0002\u0002Z[\u0007c\u0002\u0002",
    "[\\\u0007v\u0002\u0002\\]\u0007g\u0002\u0002]\u0004\u0003\u0002\u0002",
    "\u0002^_\u0007t\u0002\u0002_`\u0007g\u0002\u0002`a\u0007o\u0002\u0002",
    "ab\u0007q\u0002\u0002bc\u0007x\u0002\u0002cd\u0007g\u0002\u0002d\u0006",
    "\u0003\u0002\u0002\u0002ef\u0007w\u0002\u0002fg\u0007r\u0002\u0002g",
    "h\u0007f\u0002\u0002hi\u0007c\u0002\u0002ij\u0007v\u0002\u0002jk\u0007",
    "g\u0002\u0002k\b\u0003\u0002\u0002\u0002lm\u0007c\u0002\u0002mn\u0007",
    "u\u0002\u0002no\u0007u\u0002\u0002op\u0007k\u0002\u0002pq\u0007i\u0002",
    "\u0002qr\u0007p\u0002\u0002r\n\u0003\u0002\u0002\u0002st\u0007t\u0002",
    "\u0002tu\u0007g\u0002\u0002uv\u0007x\u0002\u0002vw\u0007q\u0002\u0002",
    "wx\u0007m\u0002\u0002xy\u0007g\u0002\u0002y\f\u0003\u0002\u0002\u0002",
    "z{\u0007s\u0002\u0002{|\u0007w\u0002\u0002|}\u0007g\u0002\u0002}~\u0007",
    "t\u0002\u0002~\u007f\u0007{\u0002\u0002\u007f\u000e\u0003\u0002\u0002",
    "\u0002\u0080\u0081\u0007u\u0002\u0002\u0081\u0082\u0007w\u0002\u0002",
    "\u0082\u0083\u0007d\u0002\u0002\u0083\u0084\u0007u\u0002\u0002\u0084",
    "\u0085\u0007e\u0002\u0002\u0085\u0086\u0007t\u0002\u0002\u0086\u0087",
    "\u0007k\u0002\u0002\u0087\u0088\u0007r\u0002\u0002\u0088\u0089\u0007",
    "v\u0002\u0002\u0089\u008a\u0007k\u0002\u0002\u008a\u008b\u0007q\u0002",
    "\u0002\u008b\u008c\u0007p\u0002\u0002\u008c\u0010\u0003\u0002\u0002",
    "\u0002\u008d\u008e\u0007t\u0002\u0002\u008e\u008f\u0007q\u0002\u0002",
    "\u008f\u0090\u0007n\u0002\u0002\u0090\u0091\u0007g\u0002\u0002\u0091",
    "\u0012\u0003\u0002\u0002\u0002\u0092\u0093\u0007r\u0002\u0002\u0093",
    "\u0094\u0007t\u0002\u0002\u0094\u0095\u0007k\u0002\u0002\u0095\u0096",
    "\u0007q\u0002\u0002\u0096\u0097\u0007t\u0002\u0002\u0097\u0098\u0007",
    "k\u0002\u0002\u0098\u0099\u0007v\u0002\u0002\u0099\u009a\u0007{\u0002",
    "\u0002\u009a\u0014\u0003\u0002\u0002\u0002\u009b\u009c\u0007O\u0002",
    "\u0002\u009c\u009d\u0007U\u0002\u0002\u009d\u009e\u0007I\u0002\u0002",
    "\u009e\u0016\u0003\u0002\u0002\u0002\u009f\u00a0\u0007R\u0002\u0002",
    "\u00a0\u00a1\u0007W\u0002\u0002\u00a1\u00a2\u0007D\u0002\u0002\u00a2",
    "\u00a3\u0007N\u0002\u0002\u00a3\u00a4\u0007K\u0002\u0002\u00a4\u00a5",
    "\u0007U\u0002\u0002\u00a5\u00a6\u0007J\u0002\u0002\u00a6\u00a7\u0007",
    "G\u0002\u0002\u00a7\u00a8\u0007T\u0002\u0002\u00a8\u0018\u0003\u0002",
    "\u0002\u0002\u00a9\u00aa\u0007E\u0002\u0002\u00aa\u00ab\u0007Q\u0002",
    "\u0002\u00ab\u00ac\u0007P\u0002\u0002\u00ac\u00ad\u0007U\u0002\u0002",
    "\u00ad\u00ae\u0007W\u0002\u0002\u00ae\u00af\u0007O\u0002\u0002\u00af",
    "\u00b0\u0007G\u0002\u0002\u00b0\u00b1\u0007T\u0002\u0002\u00b1\u001a",
    "\u0003\u0002\u0002\u0002\u00b2\u00b3\u0007h\u0002\u0002\u00b3\u00b4",
    "\u0007q\u0002\u0002\u00b4\u00b5\u0007t\u0002\u0002\u00b5\u001c\u0003",
    "\u0002\u0002\u0002\u00b6\u00b7\u0007o\u0002\u0002\u00b7\u00b8\u0007",
    "c\u0002\u0002\u00b8\u00b9\u0007v\u0002\u0002\u00b9\u00ba\u0007e\u0002",
    "\u0002\u00ba\u00bb\u0007j\u0002\u0002\u00bb\u00bc\u0007t\u0002\u0002",
    "\u00bc\u00bd\u0007q\u0002\u0002\u00bd\u00be\u0007n\u0002\u0002\u00be",
    "\u00bf\u0007g\u0002\u0002\u00bf\u001e\u0003\u0002\u0002\u0002\u00c0",
    "\u00c1\u0007o\u0002\u0002\u00c1\u00c2\u0007c\u0002\u0002\u00c2\u00c3",
    "\u0007v\u0002\u0002\u00c3\u00c4\u0007e\u0002\u0002\u00c4\u00c5\u0007",
    "j\u0002\u0002\u00c5\u00c6\u0007\"\u0002\u0002\u00c6\u00c7\u0007c\u0002",
    "\u0002\u00c7\u00c8\u0007v\u0002\u0002\u00c8\u00c9\u0007v\u0002\u0002",
    "\u00c9\u00ca\u0007t\u0002\u0002\u00ca\u00cb\u0007k\u0002\u0002\u00cb",
    "\u00cc\u0007d\u0002\u0002\u00cc\u00cd\u0007w\u0002\u0002\u00cd\u00ce",
    "\u0007v\u0002\u0002\u00ce\u00cf\u0007g\u0002\u0002\u00cf \u0003\u0002",
    "\u0002\u0002\u00d0\u00d1\u0007e\u0002\u0002\u00d1\u00d2\u0007q\u0002",
    "\u0002\u00d2\u00d3\u0007p\u0002\u0002\u00d3\u00d4\u0007u\u0002\u0002",
    "\u00d4\u00d5\u0007v\u0002\u0002\u00d5\u00d6\u0007t\u0002\u0002\u00d6",
    "\u00d7\u0007c\u0002\u0002\u00d7\u00d8\u0007k\u0002\u0002\u00d8\u00d9",
    "\u0007p\u0002\u0002\u00d9\u00da\u0007v\u0002\u0002\u00da\"\u0003\u0002",
    "\u0002\u0002\u00db\u00dc\u0007o\u0002\u0002\u00dc\u00dd\u0007k\u0002",
    "\u0002\u00dd\u00de\u0007p\u0002\u0002\u00de$\u0003\u0002\u0002\u0002",
    "\u00df\u00e0\u0007o\u0002\u0002\u00e0\u00e1\u0007c\u0002\u0002\u00e1",
    "\u00e2\u0007z\u0002\u0002\u00e2&\u0003\u0002\u0002\u0002\u00e3\u00e4",
    "\u0007c\u0002\u0002\u00e4\u00e5\u0007p\u0002\u0002\u00e5\u00e6\u0007",
    "f\u0002\u0002\u00e6(\u0003\u0002\u0002\u0002\u00e7\u00e8\u0007q\u0002",
    "\u0002\u00e8\u00e9\u0007t\u0002\u0002\u00e9*\u0003\u0002\u0002\u0002",
    "\u00ea\u00eb\u0007p\u0002\u0002\u00eb\u00ec\u0007q\u0002\u0002\u00ec",
    "\u00ed\u0007v\u0002\u0002\u00ed,\u0003\u0002\u0002\u0002\u00ee\u00ef",
    "\u0007.\u0002\u0002\u00ef.\u0003\u0002\u0002\u0002\u00f0\u00f1\u0007",
    "<\u0002\u0002\u00f10\u0003\u0002\u0002\u0002\u00f2\u00f3\u0007v\u0002",
    "\u0002\u00f3\u00f4\u0007t\u0002\u0002\u00f4\u00f5\u0007w\u0002\u0002",
    "\u00f5\u00f6\u0007g\u0002\u0002\u00f62\u0003\u0002\u0002\u0002\u00f7",
    "\u00f8\u0007h\u0002\u0002\u00f8\u00f9\u0007c\u0002\u0002\u00f9\u00fa",
    "\u0007n\u0002\u0002\u00fa\u00fb\u0007u\u0002\u0002\u00fb\u00fc\u0007",
    "g\u0002\u0002\u00fc4\u0003\u0002\u0002\u0002\u00fd\u00ff\t\u0002\u0002",
    "\u0002\u00fe\u00fd\u0003\u0002\u0002\u0002\u00ff\u0100\u0003\u0002\u0002",
    "\u0002\u0100\u00fe\u0003\u0002\u0002\u0002\u0100\u0101\u0003\u0002\u0002",
    "\u0002\u01016\u0003\u0002\u0002\u0002\u0102\u0107\u0005S*\u0002\u0103",
    "\u0106\u00059\u001d\u0002\u0104\u0106\n\u0003\u0002\u0002\u0105\u0103",
    "\u0003\u0002\u0002\u0002\u0105\u0104\u0003\u0002\u0002\u0002\u0106\u0109",
    "\u0003\u0002\u0002\u0002\u0107\u0105\u0003\u0002\u0002\u0002\u0107\u0108",
    "\u0003\u0002\u0002\u0002\u0108\u010a\u0003\u0002\u0002\u0002\u0109\u0107",
    "\u0003\u0002\u0002\u0002\u010a\u010b\u0005S*\u0002\u010b8\u0003\u0002",
    "\u0002\u0002\u010c\u010f\u0007^\u0002\u0002\u010d\u0110\t\u0004\u0002",
    "\u0002\u010e\u0110\u0005;\u001e\u0002\u010f\u010d\u0003\u0002\u0002",
    "\u0002\u010f\u010e\u0003\u0002\u0002\u0002\u0110:\u0003\u0002\u0002",
    "\u0002\u0111\u0112\u0007w\u0002\u0002\u0112\u0113\u0005=\u001f\u0002",
    "\u0113\u0114\u0005=\u001f\u0002\u0114\u0115\u0005=\u001f\u0002\u0115",
    "\u0116\u0005=\u001f\u0002\u0116<\u0003\u0002\u0002\u0002\u0117\u0118",
    "\t\u0005\u0002\u0002\u0118>\u0003\u0002\u0002\u0002\u0119\u011b\u0007",
    "/\u0002\u0002\u011a\u0119\u0003\u0002\u0002\u0002\u011a\u011b\u0003",
    "\u0002\u0002\u0002\u011b\u011c\u0003\u0002\u0002\u0002\u011c\u011d\u0005",
    "A!\u0002\u011d\u011f\u00070\u0002\u0002\u011e\u0120\t\u0006\u0002\u0002",
    "\u011f\u011e\u0003\u0002\u0002\u0002\u0120\u0121\u0003\u0002\u0002\u0002",
    "\u0121\u011f\u0003\u0002\u0002\u0002\u0121\u0122\u0003\u0002\u0002\u0002",
    "\u0122\u0124\u0003\u0002\u0002\u0002\u0123\u0125\u0005C\"\u0002\u0124",
    "\u0123\u0003\u0002\u0002\u0002\u0124\u0125\u0003\u0002\u0002\u0002\u0125",
    "\u0131\u0003\u0002\u0002\u0002\u0126\u0128\u0007/\u0002\u0002\u0127",
    "\u0126\u0003\u0002\u0002\u0002\u0127\u0128\u0003\u0002\u0002\u0002\u0128",
    "\u0129\u0003\u0002\u0002\u0002\u0129\u012a\u0005A!\u0002\u012a\u012b",
    "\u0005C\"\u0002\u012b\u0131\u0003\u0002\u0002\u0002\u012c\u012e\u0007",
    "/\u0002\u0002\u012d\u012c\u0003\u0002\u0002\u0002\u012d\u012e\u0003",
    "\u0002\u0002\u0002\u012e\u012f\u0003\u0002\u0002\u0002\u012f\u0131\u0005",
    "A!\u0002\u0130\u011a\u0003\u0002\u0002\u0002\u0130\u0127\u0003\u0002",
    "\u0002\u0002\u0130\u012d\u0003\u0002\u0002\u0002\u0131@\u0003\u0002",
    "\u0002\u0002\u0132\u013b\u00072\u0002\u0002\u0133\u0137\t\u0007\u0002",
    "\u0002\u0134\u0136\t\u0006\u0002\u0002\u0135\u0134\u0003\u0002\u0002",
    "\u0002\u0136\u0139\u0003\u0002\u0002\u0002\u0137\u0135\u0003\u0002\u0002",
    "\u0002\u0137\u0138\u0003\u0002\u0002\u0002\u0138\u013b\u0003\u0002\u0002",
    "\u0002\u0139\u0137\u0003\u0002\u0002\u0002\u013a\u0132\u0003\u0002\u0002",
    "\u0002\u013a\u0133\u0003\u0002\u0002\u0002\u013bB\u0003\u0002\u0002",
    "\u0002\u013c\u013e\t\b\u0002\u0002\u013d\u013f\t\t\u0002\u0002\u013e",
    "\u013d\u0003\u0002\u0002\u0002\u013e\u013f\u0003\u0002\u0002\u0002\u013f",
    "\u0140\u0003\u0002\u0002\u0002\u0140\u0141\u0005A!\u0002\u0141D\u0003",
    "\u0002\u0002\u0002\u0142\u0143\u0007=\u0002\u0002\u0143F\u0003\u0002",
    "\u0002\u0002\u0144\u0145\u0007*\u0002\u0002\u0145H\u0003\u0002\u0002",
    "\u0002\u0146\u0147\u0007+\u0002\u0002\u0147J\u0003\u0002\u0002\u0002",
    "\u0148\u0149\u0007}\u0002\u0002\u0149L\u0003\u0002\u0002\u0002\u014a",
    "\u014b\u0007\u007f\u0002\u0002\u014bN\u0003\u0002\u0002\u0002\u014c",
    "\u014d\u0007]\u0002\u0002\u014dP\u0003\u0002\u0002\u0002\u014e\u014f",
    "\u0007_\u0002\u0002\u014fR\u0003\u0002\u0002\u0002\u0150\u0151\u0007",
    "$\u0002\u0002\u0151T\u0003\u0002\u0002\u0002\u0152\u0154\t\n\u0002\u0002",
    "\u0153\u0152\u0003\u0002\u0002\u0002\u0154\u0155\u0003\u0002\u0002\u0002",
    "\u0155\u0153\u0003\u0002\u0002\u0002\u0155\u0156\u0003\u0002\u0002\u0002",
    "\u0156\u0157\u0003\u0002\u0002\u0002\u0157\u0158\b+\u0002\u0002\u0158",
    "V\u0003\u0002\u0002\u0002\u0011\u0002\u0100\u0105\u0107\u010f\u011a",
    "\u0121\u0124\u0127\u012d\u0130\u0137\u013a\u013e\u0155\u0003\b\u0002",
    "\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function RolLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

RolLexer.prototype = Object.create(antlr4.Lexer.prototype);
RolLexer.prototype.constructor = RolLexer;

RolLexer.EOF = antlr4.Token.EOF;
RolLexer.T__0 = 1;
RolLexer.T__1 = 2;
RolLexer.T__2 = 3;
RolLexer.T__3 = 4;
RolLexer.T__4 = 5;
RolLexer.T__5 = 6;
RolLexer.T__6 = 7;
RolLexer.T__7 = 8;
RolLexer.T__8 = 9;
RolLexer.T__9 = 10;
RolLexer.T__10 = 11;
RolLexer.T__11 = 12;
RolLexer.T__12 = 13;
RolLexer.T__13 = 14;
RolLexer.T__14 = 15;
RolLexer.T__15 = 16;
RolLexer.T__16 = 17;
RolLexer.T__17 = 18;
RolLexer.T__18 = 19;
RolLexer.T__19 = 20;
RolLexer.T__20 = 21;
RolLexer.T__21 = 22;
RolLexer.T__22 = 23;
RolLexer.T__23 = 24;
RolLexer.T__24 = 25;
RolLexer.IDENT = 26;
RolLexer.STRING = 27;
RolLexer.NUMBER = 28;
RolLexer.SEMI = 29;
RolLexer.LPAREN = 30;
RolLexer.RPAREN = 31;
RolLexer.LCBRACKET = 32;
RolLexer.RCBRACKET = 33;
RolLexer.LSBRACKET = 34;
RolLexer.RSBRACKET = 35;
RolLexer.DBLQUOTE = 36;
RolLexer.WS = 37;


RolLexer.modeNames = [ "DEFAULT_MODE" ];

RolLexer.literalNames = [ 'null', "'create'", "'remove'", "'update'", "'assign'", 
                          "'revoke'", "'query'", "'subscription'", "'role'", 
                          "'priority'", "'MSG'", "'PUBLISHER'", "'CONSUMER'", 
                          "'for'", "'matchrole'", "'match attribute'", "'constraint'", 
                          "'min'", "'max'", "'and'", "'or'", "'not'", "','", 
                          "':'", "'true'", "'false'", 'null', 'null', 'null', 
                          "';'", "'('", "')'", "'{'", "'}'", "'['", "']'", 
                          "'\"'" ];

RolLexer.symbolicNames = [ 'null', 'null', 'null', 'null', 'null', 'null', 
                           'null', 'null', 'null', 'null', 'null', 'null', 
                           'null', 'null', 'null', 'null', 'null', 'null', 
                           'null', 'null', 'null', 'null', 'null', 'null', 
                           'null', 'null', "IDENT", "STRING", "NUMBER", 
                           "SEMI", "LPAREN", "RPAREN", "LCBRACKET", "RCBRACKET", 
                           "LSBRACKET", "RSBRACKET", "DBLQUOTE", "WS" ];

RolLexer.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", 
                       "T__7", "T__8", "T__9", "T__10", "T__11", "T__12", 
                       "T__13", "T__14", "T__15", "T__16", "T__17", "T__18", 
                       "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
                       "IDENT", "STRING", "ESC", "UNICODE", "HEX", "NUMBER", 
                       "INT", "EXP", "SEMI", "LPAREN", "RPAREN", "LCBRACKET", 
                       "RCBRACKET", "LSBRACKET", "RSBRACKET", "DBLQUOTE", 
                       "WS" ];

RolLexer.grammarFileName = "Rol.g4";



exports.RolLexer = RolLexer;

