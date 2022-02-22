import {StreamLanguage} from "@codemirror/stream-parser"

// the following languages have already dedicated modules for Codemirror6
// (in the @codemirror/lang-* packages), so we use them instead: 
//
// css
// javascript
// python
// rust
// sql
// wast
// xml/html
//
// see ./languages.js for more details

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
// import {css} from "@codemirror/legacy-modes/mode/css";
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
// import {javascript} from "@codemirror/legacy-modes/mode/javascript";
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
// import {python} from "@codemirror/legacy-modes/mode/python";
import {q} from "@codemirror/legacy-modes/mode/q";
import {r} from "@codemirror/legacy-modes/mode/r";
import {rpmChanges, rpmSpec} from "@codemirror/legacy-modes/mode/rpm";
import {ruby} from "@codemirror/legacy-modes/mode/ruby";
// import {rust} from "@codemirror/legacy-modes/mode/rust";
import {sas} from "@codemirror/legacy-modes/mode/sas";
import {scheme} from "@codemirror/legacy-modes/mode/scheme";
import {shell} from "@codemirror/legacy-modes/mode/shell";
import {sieve} from "@codemirror/legacy-modes/mode/sieve";
import {simpleMode} from "@codemirror/legacy-modes/mode/simple-mode";
import {smalltalk} from "@codemirror/legacy-modes/mode/smalltalk";
import {solr} from "@codemirror/legacy-modes/mode/solr";
import {sparql} from "@codemirror/legacy-modes/mode/sparql";
import {spreadsheet} from "@codemirror/legacy-modes/mode/spreadsheet";
// import {sql} from "@codemirror/legacy-modes/mode/sql";
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
// import {wast} from "@codemirror/legacy-modes/mode/wast";
import {webIDL} from "@codemirror/legacy-modes/mode/webidl";
// import {xml, html} from "@codemirror/legacy-modes/mode/xml";
import {xQuery} from "@codemirror/legacy-modes/mode/xquery";
import {yacas} from "@codemirror/legacy-modes/mode/yacas";
import {yaml} from "@codemirror/legacy-modes/mode/yaml";
import {z80} from "@codemirror/legacy-modes/mode/z80";

import {tomlMode} from "@sgarciac/cm_toml_mode"; // "A better TOML mode for Codemirror"

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
	// 'css': StreamLanguage.define(css),  // we use instead @codemirror/lang-css (see languages.js)
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
	// 'javascript': StreamLanguage.define(javascript),
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
	// 'python': StreamLanguage.define(python),
	'q': StreamLanguage.define(q),
	'r': StreamLanguage.define(r),
	'rpmChanges': StreamLanguage.define(rpmChanges),
	'rpmSpec': StreamLanguage.define(rpmSpec),
	'ruby': StreamLanguage.define(ruby),
	// 'rust': StreamLanguage.define(rust),
	'sas': StreamLanguage.define(sas),
	'scheme': StreamLanguage.define(scheme),
	'shell': StreamLanguage.define(shell),
	'sieve': StreamLanguage.define(sieve),
	'simpleMode': StreamLanguage.define(simpleMode),
	'smalltalk': StreamLanguage.define(smalltalk),
	'solr': StreamLanguage.define(solr),
	'sparql': StreamLanguage.define(sparql),
	'spreadsheet': StreamLanguage.define(spreadsheet),
	// 'sql': StreamLanguage.define(sql),
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
	// 'wast': StreamLanguage.define(wast),
	'webIDL': StreamLanguage.define(webIDL),
	// 'xml': StreamLanguage.define(xml),
	// 'html': StreamLanguage.define(html),  // we use instead @codemirror/lang-html (see languages.js)
	'xQuery': StreamLanguage.define(xQuery),
	'yacas': StreamLanguage.define(yacas),
	'yaml': StreamLanguage.define(yaml),
	'z80': StreamLanguage.define(z80),
}

// override the default TOML mode with this one: @sgarciac/cm_toml_mode

legacyLanguages['toml'] = StreamLanguage.define(tomlMode());

export default legacyLanguages;
