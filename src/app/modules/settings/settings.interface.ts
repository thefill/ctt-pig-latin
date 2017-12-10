
// Interface for single translation rule
export interface TranslationRule {
    // rule name
    ruleName: string;
    // list of predicates to search at the begin of string
    predicatePartials: string[];
    // compiled predicate
    predicate?: RegExp;
    // should we match maximum predicates or single
    clustering: boolean;
    // move found predicate to the end of word
    needleToTheEnd: boolean;
    // string added to the word where predicate found
    suffix: string;
}
