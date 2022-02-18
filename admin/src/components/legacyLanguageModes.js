import {StreamLanguage} from "@codemirror/stream-parser"

import {apl} from "@codemirror/legacy-modes/mode/apl";
import {asciiArmor} from "@codemirror/legacy-modes/mode/asciiarmor";
import {asn1} from "@codemirror/legacy-modes/mode/asn1";
import {asterisk} from "@codemirror/legacy-modes/mode/asterisk";
import {brainfuck} from "@codemirror/legacy-modes/mode/brainfuck";
import {clike} from "@codemirror/legacy-modes/mode/clike";
import {clojure} from "@codemirror/legacy-modes/mode/clojure";
import {cmake} from "@codemirror/legacy-modes/mode/cmake";
import {cobol} from "@codemirror/legacy-modes/mode/cobol";
import {coffeeScript} from "@codemirror/legacy-modes/mode/coffeescript";
import {commonLisp} from "@codemirror/legacy-modes/mode/commonlisp";
import {crystal} from "@codemirror/legacy-modes/mode/crystal";
import {css} from "@codemirror/legacy-modes/mode/css";
import {cypher} from "@codemirror/legacy-modes/mode/cypher";
import {d} from "@codemirror/legacy-modes/mode/d";
import {diff} from "@codemirror/legacy-modes/mode/diff";
import {dockerFile} from "@codemirror/legacy-modes/mode/dockerfile";
import {dtd} from "@codemirror/legacy-modes/mode/dtd";
import {dylan} from "@codemirror/legacy-modes/mode/dylan";
import {ebnf} from "@codemirror/legacy-modes/mode/ebnf";
import {ecl} from "@codemirror/legacy-modes/mode/ecl";
import {eiffel} from "@codemirror/legacy-modes/mode/eiffel";
import {elm} from "@codemirror/legacy-modes/mode/elm";
import {erlang} from "@codemirror/legacy-modes/mode/erlang";
import {factor} from "@codemirror/legacy-modes/mode/factor";
import {fcl} from "@codemirror/legacy-modes/mode/fcl";
import {forth} from "@codemirror/legacy-modes/mode/forth";
import {fortran} from "@codemirror/legacy-modes/mode/fortran";
import {gas} from "@codemirror/legacy-modes/mode/gas";
import {gherkin} from "@codemirror/legacy-modes/mode/gherkin";
import {go} from "@codemirror/legacy-modes/mode/go";
import {groovy} from "@codemirror/legacy-modes/mode/groovy";
import {haskell} from "@codemirror/legacy-modes/mode/haskell";
import {haxe} from "@codemirror/legacy-modes/mode/haxe";
import {http} from "@codemirror/legacy-modes/mode/http";
import {idl} from "@codemirror/legacy-modes/mode/idl";
import {javascript} from "@codemirror/legacy-modes/mode/javascript";
import {jinja2} from "@codemirror/legacy-modes/mode/jinja2";
import {julia} from "@codemirror/legacy-modes/mode/julia";
import {liveScript} from "@codemirror/legacy-modes/mode/livescript";
import {lua} from "@codemirror/legacy-modes/mode/lua";
import {mathematica} from "@codemirror/legacy-modes/mode/mathematica";
import {mbox} from "@codemirror/legacy-modes/mode/mbox";
import {mirc} from "@codemirror/legacy-modes/mode/mirc";
import {oCaml, fSharp, sml} from "@codemirror/legacy-modes/mode/mllike";
import {modelica} from "@codemirror/legacy-modes/mode/modelica";
import {mscgen} from "@codemirror/legacy-modes/mode/mscgen";
import {mumps} from "@codemirror/legacy-modes/mode/mumps";
import {nginx} from "@codemirror/legacy-modes/mode/nginx";
import {nsis} from "@codemirror/legacy-modes/mode/nsis";
import {ntriples} from "@codemirror/legacy-modes/mode/ntriples";
import {octave} from "@codemirror/legacy-modes/mode/octave";
import {oz} from "@codemirror/legacy-modes/mode/oz";
import {pascal} from "@codemirror/legacy-modes/mode/pascal";
import {perl} from "@codemirror/legacy-modes/mode/perl";
import {pig} from "@codemirror/legacy-modes/mode/pig";
import {powerShell} from "@codemirror/legacy-modes/mode/powershell";
import {properties} from "@codemirror/legacy-modes/mode/properties";
import {protobuf} from "@codemirror/legacy-modes/mode/protobuf";
import {puppet} from "@codemirror/legacy-modes/mode/puppet";
import {python} from "@codemirror/legacy-modes/mode/python";
import {q} from "@codemirror/legacy-modes/mode/q";
import {r} from "@codemirror/legacy-modes/mode/r";
import {rpmChanges, rpmSpec} from "@codemirror/legacy-modes/mode/rpm";
import {ruby} from "@codemirror/legacy-modes/mode/ruby";
import {rust} from "@codemirror/legacy-modes/mode/rust";
import {sas} from "@codemirror/legacy-modes/mode/sas";
import {scheme} from "@codemirror/legacy-modes/mode/scheme";
import {shell} from "@codemirror/legacy-modes/mode/shell";
import {sieve} from "@codemirror/legacy-modes/mode/sieve";
import {simpleMode} from "@codemirror/legacy-modes/mode/simple-mode";
import {smalltalk} from "@codemirror/legacy-modes/mode/smalltalk";
import {solr} from "@codemirror/legacy-modes/mode/solr";
import {sparql} from "@codemirror/legacy-modes/mode/sparql";
import {spreadsheet} from "@codemirror/legacy-modes/mode/spreadsheet";
import {sql} from "@codemirror/legacy-modes/mode/sql";
import {stex} from "@codemirror/legacy-modes/mode/stex";
import {stylus} from "@codemirror/legacy-modes/mode/stylus";
import {swift} from "@codemirror/legacy-modes/mode/swift";
import {tcl} from "@codemirror/legacy-modes/mode/tcl";
import {textile} from "@codemirror/legacy-modes/mode/textile";
import {tiddlyWiki} from "@codemirror/legacy-modes/mode/tiddlywiki";
import {tiki} from "@codemirror/legacy-modes/mode/tiki";
import {toml} from "@codemirror/legacy-modes/mode/toml";
import {troff} from "@codemirror/legacy-modes/mode/troff";
import {ttcnCfg} from "@codemirror/legacy-modes/mode/ttcn-cfg";
import {ttcn} from "@codemirror/legacy-modes/mode/ttcn";
import {turtle} from "@codemirror/legacy-modes/mode/turtle";
import {vb} from "@codemirror/legacy-modes/mode/vb";
import {vbScript, vbScriptASP} from "@codemirror/legacy-modes/mode/vbscript";
import {velocity} from "@codemirror/legacy-modes/mode/velocity";
import {verilog} from "@codemirror/legacy-modes/mode/verilog";
import {vhdl} from "@codemirror/legacy-modes/mode/vhdl";
import {wast} from "@codemirror/legacy-modes/mode/wast";
import {webIDL} from "@codemirror/legacy-modes/mode/webidl";
import {xml, html} from "@codemirror/legacy-modes/mode/xml";
import {xQuery} from "@codemirror/legacy-modes/mode/xquery";
import {yacas} from "@codemirror/legacy-modes/mode/yacas";
import {yaml} from "@codemirror/legacy-modes/mode/yaml";
import {z80} from "@codemirror/legacy-modes/mode/z80";

if (apl == null) { console.log('not imported: apl')}
if (asciiArmor == null) { console.log('not imported: asciiArmor')}
if (asn1 == null) { console.log('not imported: asn1')}
if (asterisk == null) { console.log('not imported: asterisk')}
if (brainfuck == null) { console.log('not imported: brainfuck')}
if (clike == null) { console.log('not imported: clike')}
if (clojure == null) { console.log('not imported: clojure')}
if (cmake == null) { console.log('not imported: cmake')}
if (cobol == null) { console.log('not imported: cobol')}
if (coffeeScript == null) { console.log('not imported: coffeeScript')}
if (commonLisp == null) { console.log('not imported: commonLisp')}
if (crystal == null) { console.log('not imported: crystal')}
if (cypher == null) { console.log('not imported: cypher')}
if (d == null) { console.log('not imported: d')}
if (diff == null) { console.log('not imported: diff')}
if (dockerFile == null) { console.log('not imported: dockerFile')}
if (dtd == null) { console.log('not imported: dtd')}
if (dylan == null) { console.log('not imported: dylan')}
if (ebnf == null) { console.log('not imported: ebnf')}
if (ecl == null) { console.log('not imported: ecl')}
if (eiffel == null) { console.log('not imported: eiffel')}
if (elm == null) { console.log('not imported: elm')}
if (erlang == null) { console.log('not imported: erlang')}
if (factor == null) { console.log('not imported: factor')}
if (fcl == null) { console.log('not imported: fcl')}
if (forth == null) { console.log('not imported: forth')}
if (fortran == null) { console.log('not imported: fortran')}
if (gas == null) { console.log('not imported: gas')}
if (gherkin == null) { console.log('not imported: gherkin')}
if (go == null) { console.log('not imported: go')}
if (groovy == null) { console.log('not imported: groovy')}
if (haskell == null) { console.log('not imported: haskell')}
if (haxe == null) { console.log('not imported: haxe')}
if (http == null) { console.log('not imported: http')}
if (idl == null) { console.log('not imported: idl')}
if (javascript == null) { console.log('not imported: javascript')}
if (jinja2 == null) { console.log('not imported: jinja2')}
if (julia == null) { console.log('not imported: julia')}
if (liveScript == null) { console.log('not imported: liveScript')}
if (lua == null) { console.log('not imported: lua')}
if (mathematica == null) { console.log('not imported: mathematica')}
if (mbox == null) { console.log('not imported: mbox')}
if (mirc == null) { console.log('not imported: mirc')}
//if (mllike == null) { console.log('not imported: mllike')}
if (modelica == null) { console.log('not imported: modelica')}
if (mscgen == null) { console.log('not imported: mscgen')}
if (mumps == null) { console.log('not imported: mumps')}
if (nginx == null) { console.log('not imported: nginx')}
if (nsis == null) { console.log('not imported: nsis')}
if (ntriples == null) { console.log('not imported: ntriples')}
if (octave == null) { console.log('not imported: octave')}
if (oz == null) { console.log('not imported: oz')}
if (pascal == null) { console.log('not imported: pascal')}
if (perl == null) { console.log('not imported: perl')}
if (pig == null) { console.log('not imported: pig')}
if (powerShell == null) { console.log('not imported: powerShell')}
if (properties == null) { console.log('not imported: properties')}
if (protobuf == null) { console.log('not imported: protobuf')}
if (puppet == null) { console.log('not imported: puppet')}
if (python == null) { console.log('not imported: python')}
if (q == null) { console.log('not imported: q')}
if (r == null) { console.log('not imported: r')}

if (ruby == null) { console.log('not imported: ruby')}
if (rust == null) { console.log('not imported: rust')}
if (sas == null) { console.log('not imported: sas')}
if (scheme == null) { console.log('not imported: scheme')}
if (shell == null) { console.log('not imported: shell')}
if (sieve == null) { console.log('not imported: sieve')}
if (simpleMode == null) { console.log('not imported: simpleMode')}
if (smalltalk == null) { console.log('not imported: smalltalk')}
if (solr == null) { console.log('not imported: solr')}
if (sparql == null) { console.log('not imported: sparql')}
if (spreadsheet == null) { console.log('not imported: spreadsheet')}
if (sql == null) { console.log('not imported: sql')}
if (stex == null) { console.log('not imported: stex')}
if (stylus == null) { console.log('not imported: stylus')}
if (swift == null) { console.log('not imported: swift')}
if (tcl == null) { console.log('not imported: tcl')}
if (textile == null) { console.log('not imported: textile')}
if (tiddlyWiki == null) { console.log('not imported: tiddlyWiki')}
if (tiki == null) { console.log('not imported: tiki')}
if (troff == null) { console.log('not imported: troff')}
if (ttcnCfg == null) { console.log('not imported: ttcnCfg')}
if (ttcn == null) { console.log('not imported: ttcn')}
if (turtle == null) { console.log('not imported: turtle')}
if (vb == null) { console.log('not imported: vb')}
// if (vbscript == null) { console.log('not imported: vbscript')}
if (velocity == null) { console.log('not imported: velocity')}
if (verilog == null) { console.log('not imported: verilog')}
if (vhdl == null) { console.log('not imported: vhdl')}
if (wast == null) { console.log('not imported: wast')}
if (webIDL == null) { console.log('not imported: webIDL')}
if (xml == null) { console.log('not imported: xml')}
if (xQuery == null) { console.log('not imported: xQuery')}
if (yacas == null) { console.log('not imported: yacas')}
if (yaml == null) { console.log('not imported: yaml')}
if (z80 == null) { console.log('not imported: z80')}

let legacyLanguages = {
	'apl': StreamLanguage.define(apl),
	'asciiArmor': StreamLanguage.define(asciiArmor),
	'asn1': StreamLanguage.define(asn1),
	'asterisk': StreamLanguage.define(asterisk),
	'brainfuck': StreamLanguage.define(brainfuck),
	'clike': StreamLanguage.define(clike),
	'clojure': StreamLanguage.define(clojure),
	'cmake': StreamLanguage.define(cmake),
	'cobol': StreamLanguage.define(cobol),
	'coffeeScript': StreamLanguage.define(coffeeScript),
	'commonLisp': StreamLanguage.define(commonLisp),
	'crystal': StreamLanguage.define(crystal),
	// 'css': StreamLanguage.define(css),  // we prefer @codemirror/lang-css
	'cypher': StreamLanguage.define(cypher),
	'd': StreamLanguage.define(d),
	'diff': StreamLanguage.define(diff),
	'dockerFile': StreamLanguage.define(dockerFile),
	'dtd': StreamLanguage.define(dtd),
	'dylan': StreamLanguage.define(dylan),
	'ebnf': StreamLanguage.define(ebnf),
	'ecl': StreamLanguage.define(ecl),
	'eiffel': StreamLanguage.define(eiffel),
	'elm': StreamLanguage.define(elm),
	'erlang': StreamLanguage.define(erlang),
	'factor': StreamLanguage.define(factor),
	'fcl': StreamLanguage.define(fcl),
	'forth': StreamLanguage.define(forth),
	'fortran': StreamLanguage.define(fortran),
	'gas': StreamLanguage.define(gas),
	'gherkin': StreamLanguage.define(gherkin),
	'go': StreamLanguage.define(go),
	'groovy': StreamLanguage.define(groovy),
	'haskell': StreamLanguage.define(haskell),
	'haxe': StreamLanguage.define(haxe),
	'http': StreamLanguage.define(http),
	'idl': StreamLanguage.define(idl),
	'javascript': StreamLanguage.define(javascript),
	'jinja2': StreamLanguage.define(jinja2),
	'julia': StreamLanguage.define(julia),
	'liveScript': StreamLanguage.define(liveScript),
	'lua': StreamLanguage.define(lua),
	'mathematica': StreamLanguage.define(mathematica),
	'mbox': StreamLanguage.define(mbox),
	'mirc': StreamLanguage.define(mirc),
	'oCaml': StreamLanguage.define(oCaml),
	'fSharp': StreamLanguage.define(fSharp),
	'sml': StreamLanguage.define(sml),
	'modelica': StreamLanguage.define(modelica),
	'mscgen': StreamLanguage.define(mscgen),
	'mumps': StreamLanguage.define(mumps),
	'nginx': StreamLanguage.define(nginx),
	'nsis': StreamLanguage.define(nsis),
	'ntriples': StreamLanguage.define(ntriples),
	'octave': StreamLanguage.define(octave),
	'oz': StreamLanguage.define(oz),
	'pascal': StreamLanguage.define(pascal),
	'perl': StreamLanguage.define(perl),
	'pig': StreamLanguage.define(pig),
	'powerShell': StreamLanguage.define(powerShell),
	'properties': StreamLanguage.define(properties),
	'protobuf': StreamLanguage.define(protobuf),
	'puppet': StreamLanguage.define(puppet),
	'python': StreamLanguage.define(python),
	'q': StreamLanguage.define(q),
	'r': StreamLanguage.define(r),
	'rpmChanges': StreamLanguage.define(rpmChanges),
	'rpmSpec': StreamLanguage.define(rpmSpec),
	'ruby': StreamLanguage.define(ruby),
	'rust': StreamLanguage.define(rust),
	'sas': StreamLanguage.define(sas),
	'scheme': StreamLanguage.define(scheme),
	'shell': StreamLanguage.define(shell),
	'sieve': StreamLanguage.define(sieve),
	'simpleMode': StreamLanguage.define(simpleMode),
	'smalltalk': StreamLanguage.define(smalltalk),
	'solr': StreamLanguage.define(solr),
	'sparql': StreamLanguage.define(sparql),
	'spreadsheet': StreamLanguage.define(spreadsheet),
	'sql': StreamLanguage.define(sql),
	'stex': StreamLanguage.define(stex),
	'stylus': StreamLanguage.define(stylus),
	'swift': StreamLanguage.define(swift),
	'tcl': StreamLanguage.define(tcl),
	'textile': StreamLanguage.define(textile),
	'tiddlyWiki': StreamLanguage.define(tiddlyWiki),
	'tiki': StreamLanguage.define(tiki),
	'toml': StreamLanguage.define(toml),
	'troff': StreamLanguage.define(troff),
	'ttcnCfg': StreamLanguage.define(ttcnCfg),
	'ttcn': StreamLanguage.define(ttcn),
	'turtle': StreamLanguage.define(turtle),
	'vb': StreamLanguage.define(vb),
	'vbScript': StreamLanguage.define(vbScript),
	'vbScriptASP': StreamLanguage.define(vbScriptASP),
	'velocity': StreamLanguage.define(velocity),
	'verilog': StreamLanguage.define(verilog),
	'vhdl': StreamLanguage.define(vhdl),
	'wast': StreamLanguage.define(wast),
	'webIDL': StreamLanguage.define(webIDL),
	'xml': StreamLanguage.define(xml),
	// 'html': StreamLanguage.define(html),  // we prefer @codemirror/lang-html
	'xQuery': StreamLanguage.define(xQuery),
	'yacas': StreamLanguage.define(yacas),
	'yaml': StreamLanguage.define(yaml),
	'z80': StreamLanguage.define(z80),
}

export default legacyLanguages;
