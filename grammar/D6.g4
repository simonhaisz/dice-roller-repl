grammar D6;

source:
    (statement NEW_LINE*)*
;

statement:
    declaration |
    expression |
    USE_EDGE
;

declaration:
    ID ASSIGNMENT expression
;

expression:
    (USE_EDGE)? value (OPERATOR value)*
;

value :
    NUMBER | ID
;

USE_EDGE:
    U S E E D G E // case insensitive
;

ASSIGNMENT:
    '='
;

OPERATOR:
    '+' | '-'
;

NUMBER:
    [0-9]+
;

ID:
    [a-zA-Z]+
;

NEW_LINE:
    ([\r])?[\n]
;

WS:
    [ \t]+ -> skip
;

fragment A : [aA]; // match either an 'a' or 'A'
fragment B : [bB];
fragment C : [cC];
fragment D : [dD];
fragment E : [eE];
fragment F : [fF];
fragment G : [gG];
fragment H : [hH];
fragment I : [iI];
fragment J : [jJ];
fragment K : [kK];
fragment L : [lL];
fragment M : [mM];
fragment N : [nN];
fragment O : [oO];
fragment P : [pP];
fragment Q : [qQ];
fragment R : [rR];
fragment S : [sS];
fragment T : [tT];
fragment U : [uU];
fragment V : [vV];
fragment W : [wW];
fragment X : [xX];
fragment Y : [yY];
fragment Z : [zZ];