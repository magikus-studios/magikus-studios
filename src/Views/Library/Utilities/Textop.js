import React from "react";
import Group from "Components/Group";

export default function Function() {

    
    return (
        <div className="c-light-2">           
            <h1 className="text-center pad-top-4">Textop Utilities</h1>
            <h6 className="ts-i text-center pad-bottom-3 c-light-4 ft-secondary">
                Methods for String and Character Manipulation 
            </h6>
                        
            <h3 className="p-2">Overview</h3>
            <p className="pad-left-2 pad-bottom-2">
                The Textop utilities provide a rich set of static and extension methods to manipulate and analyze strings in an efficient and flexible manner. 
                Whether you're counting occurrences, modifying content or checking for specific patterns, these utilities are designed to make string manipulation easy and intuitive. 
                By using the powerful methods available, developers can streamline complex string-related tasks and ensure that their applications handle text data effectively.
            </p>
            <div className="p-2">
                <img className="block-center mar-bottom-3 img-border w-40" src="images/Library/Utilities/Textop/Textop - 07.jpg" alt=""/>            
            </div>

            <h3 className="p-2">Introduction</h3>
            <p className="pad-left-2">
                These methods allow users to perform various operations on strings and characters, such as checking for conditions, counting occurrences or modifying content. 
                The utilities are flexible, offering several ways to manipulate string data based on an index, character types or even enum-based conditions.
            </p> 
            <Group title="Get" content={(
                <div>
                    <p>
                        Get Special returns a special character based on the SPECIAL_CHAR Enum.<br/>
                        Get Index returns the index of a string based on an offset that wraps between 0 and the last index of a string.<br/>
                        Get Char returns a character of a string based on an offset that wraps between 0 and the last index.<br/>
                        Get works similarly to the Substring method, but the indexOffset wraps between 0 and the last index.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static char</b2> <b1>GetSpecial</b1>(<b2>SPECIAL_CHAR</b2> <b1>specialChar</b1>)</li>
                        <li><b2>static int</b2> <b1>GetIndex</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>index = 0</b1>, <b2>bool</b2> <b1>allowLastIndex = false</b1>)</li>
                        <li><b2>static char</b2> <b1>GetChar</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>index = 0</b1>)</li>
                        <li><b2>static string</b2> <b1>Get</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>amountOfCharacters</b1>, <b2>int</b2> <b1>index = 0</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>SPECIAL_CHAR</b2> <b1>specialChar</b1>: Enum that determines a special character</li>                    
                        <li><b2>string</b2> <b1>text</b1>: String to manipulate</li>                    
                        <li><b2>int</b2> <b1>index</b1>: Index number to use</li>                    
                        <li><b2>int</b2> <b1>amountOfCharacters</b1>: Amount of characters to select</li>                    
                        <li><b2>bool</b2> <b1>allowLastIndex</b1>: Enables wraping the index between 0 and the total length of the string instead of the total number of indexes</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Is" content={(
                <div>
                    <p>
                        Compares a character with another character or type or compares acharacter in a string with another character, string or a character type.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static bool</b2> <b1>Is</b1>(<b2>this char</b2> <b1>text</b1>, <b2>char</b2> <b1>compareText</b1>)</li>
                        <li><b2>static bool</b2> <b1>Is</b1>(<b2>this string</b2> <b1>text</b1>, <b2>char</b2> <b1>compareText</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                        <li><b2>static bool</b2> <b1>Is</b1>(<b2>this string</b2> <b1>text</b1>, <b2>string</b2> <b1>compareText</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                        <li><b2>static bool</b2> <b1>Is</b1>(<b2>this char</b2> <b1>text</b1>, <b2>CHAR_TYPE</b2> <b1>type</b1>)</li>
                        <li><b2>static bool</b2> <b1>Is</b1>(<b2>this string</b2> <b1>text</b1>, <b2>CHAR_TYPE</b2> <b1>type</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>char</b2> <b1>text</b1>: Char to manipulate</li>                    
                        <li><b2>string</b2> <b1>text</b1>: String to manipulate</li>                    
                        <li><b2>char</b2> <b1>compareText</b1>: Char to compare to</li>                    
                        <li><b2>string</b2> <b1>compareText</b1>: String to compare to</li>                    
                        <li><b2>int</b2> <b1>indexOffset</b1>: Index number to use</li>                    
                        <li><b2>CHAR_TYPE</b2> <b1>type</b1>: Enum that determines a type of character</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="IsSpecial" content={(
                <div>
                    <p>
                        Checks whether a character or a character in a string is a special character based on the SPECIAL_CHAR Enum. 
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static bool</b2> <b1>IsSpecial</b1>(<b2>this char</b2> <b1>text</b1>, <b2>SPECIAL_CHAR</b2> <b1>specialChar</b1>)</li>
                        <li><b2>static bool</b2> <b1>IsSpecial</b1>(<b2>this string</b2> <b1>text</b1>, <b2>SPECIAL_CHAR</b2> <b1>specialChar</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>char</b2> <b1>text</b1>: Char to manipulate</li>                    
                        <li><b2>string</b2> <b1>text</b1>: String to manipulate</li>                    
                        <li><b2>int</b2> <b1>indexOffset</b1>: Index number to use</li>                    
                        <li><b2>SPECIAL_CHAR</b2> <b1>specialChar</b1>: Enum that determines a special character</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="IsLength" content={(
                <div>
                    <p>
                        Compares the length of a string with another string or with an amount of characters using the COMPARISON Enum.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static bool</b2> <b1>IsLength</b1>(<b2>this string</b2> <b1>text</b1>, <b2>string</b2> <b1>compareText</b1>, <b2>COMPARISON</b2> <b1>comparer</b1>)</li>
                        <li><b2>static bool</b2> <b1>IsLength</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>amountOfCharacters</b1>, <b2>COMPARISON</b2> <b1>comparer</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>string</b2> <b1>text</b1>: String to manipulate</li>                    
                        <li><b2>string</b2> <b1>compareText</b1>: String to compare to</li>                    
                        <li><b2>int</b2> <b1>amountOfCharacters</b1>: Amount of characters to select</li>                    
                        <li><b2>COMPARISON</b2> <b1>comparer</b1>: Enum that determines the type of comparison to use</li>                                   
                    </ul>
                </div>
            )}/>
            <Group title="Contains" content={(
                <div>
                    <p>
                        Checks if a string contains a certain index value, another character, another type of character or another special character.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static bool</b2> <b1>Contains</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>index</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                        <li><b2>static bool</b2> <b1>Contains</b1>(<b2>this string</b2> <b1>text</b1>, <b2>char</b2> <b1>charToCheckIfContained</b1>)</li>
                        <li><b2>static bool</b2> <b1>Contains</b1>(<b2>this string</b2> <b1>text</b1>, <b2>CHAR_TYPE</b2> <b1>type</b1>)</li>
                        <li><b2>static bool</b2> <b1>Contains</b1>(<b2>this string</b2> <b1>text</b1>, <b2>SPECIAL_CHAR</b2> <b1>specialChar</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>string</b2> <b1>text</b1>: String to manipulate</li>                    
                        <li><b2>int</b2> <b1>index</b1>: Index to check</li>                    
                        <li><b2>int</b2> <b1>indexOffset</b1>: Offset of the index value</li>                    
                        <li><b2>char</b2> <b1>charToCheckIfContained</b1>: Char to check if it is contained</li>                    
                        <li><b2>CHAR_TYPE</b2> <b1>type</b1>: Enum that determines a type of character</li>                    
                        <li><b2>SPECIAL_CHAR</b2> <b1>specialChar</b1>: Enum that determines a special character</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Count" content={(
                <div>
                    <p>
                        Counts the amount of occurrences of a char, a string, a type of character or a special character within a string.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static int</b2> <b1>Count</b1>(<b2>this string</b2> <b1>text</b1>, <b2>char</b2> <b1>charIncludedInText</b1>)</li>
                        <li><b2>static int</b2> <b1>Count</b1>(<b2>this string</b2> <b1>text</b1>, <b2>string</b2> <b1>stringIncludedInText</b1>)</li>
                        <li><b2>static int</b2> <b1>Count</b1>(<b2>this string</b2> <b1>text</b1>, <b2>CHAR_TYPE</b2> <b1>type</b1>)</li>
                        <li><b2>static int</b2> <b1>Count</b1>(<b2>this string</b2> <b1>text</b1>, <b2>SPECIAL_CHAR</b2> <b1>specialChar</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>string</b2> <b1>text</b1>: String to manipulate</li>                    
                        <li><b2>char</b2> <b1>charIncludedInText</b1>: Char to count</li>                    
                        <li><b2>string</b2> <b1>stringIncludedInText</b1>: String to count</li>                    
                        <li><b2>CHAR_TYPE</b2> <b1>type</b1>: Enum that determines a type of character to count</li>                    
                        <li><b2>SPECIAL_CHAR</b2> <b1>specialChar</b1>: Enum that determines a special character to count</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Check" content={(
                <div>
                    <p>
                        Checks if a string starts or ends with another char or string.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static bool</b2> <b1>Check</b1>(<b2>this string</b2> <b1>text</b1>, <b2>char</b2> <b1>charToCheck</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                        <li><b2>static bool</b2> <b1>Check</b1>(<b2>this string</b2> <b1>text</b1>, <b2>string</b2> <b1>stringToCheck</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>string</b2> <b1>text</b1>: String to manipulate</li>                    
                        <li><b2>int</b2> <b1>indexOffset</b1>: Offset of the index value. If negative, it wraps around the length of the string</li>                    
                        <li><b2>char</b2> <b1>charToCheck</b1>: Char to compare</li>                    
                        <li><b2>string</b2> <b1>stringToCheck</b1>: String to compare</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Repeat" content={(
                <div>
                    <p>
                        Returns a string of the character or the same string repeated a certain number of times.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static string</b2> <b1>Repeat</b1>(<b2>this char</b2> <b1>text</b1>, <b2>int</b2> <b1>amountOfTimes = 1</b1>)</li>
                        <li><b2>static string</b2> <b1>Repeat</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>amountOfTimes = 1</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>char</b2> <b1>text</b1>: Char to manipulate</li>                    
                        <li><b2>string</b2> <b1>text</b1>: String to manipulate</li>                    
                        <li><b2>int</b2> <b1>amountOfTimes</b1>: Amount of times to repeat the text</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Reverse" content={(
                <div>
                    <p>
                        Reverses the content of a string or part of it.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static string</b2> <b1>Reverse</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>startIndex = 0</b1>, <b2>int</b2> <b1>amount = 0</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>string</b2> <b1>text</b1>: String to manipulate</li>                    
                        <li><b2>int</b2> <b1>startIndex</b1>: Index to start the selection</li>                    
                        <li><b2>int</b2> <b1>amount</b1>: Amount of characters to reverse starting from the index. If 0, the amount is the whole string</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Replace" content={(
                <div>
                    <p>
                        Replaces at a certain index or any amount of occurrances of a char, string or CHAR_TYPE in a certain text string with another char or string.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static string</b2> <b1>Replace</b1>(<b2>this string</b2> <b1>text</b1>, <b2>char</b2> <b1>newText</b1>, <b2>int</b2> <b1>index = 0</b1>)</li>
                        <li><b2>static string</b2> <b1>Replace</b1>(<b2>this string</b2> <b1>text</b1>, <b2>string</b2> <b1>newText</b1>, <b2>int</b2> <b1>index = 0</b1>)</li>
                        <li><b2>static string</b2> <b1>Replace</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>characterAmount</b1>, <b2>char</b2> <b1>newText</b1>, <b2>int</b2> <b1>index = 0</b1>)</li>
                        <li><b2>static string</b2> <b1>Replace</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>characterAmount</b1>, <b2>string</b2> <b1>newText</b1>, <b2>int</b2> <b1>index = 0</b1>)</li>
                        <li><b2>static string</b2> <b1>Replace</b1>(<b2>this string</b2> <b1>text</b1>, <b2>char</b2> <b1>oldText</b1>, <b2>char</b2> <b1>newText</b1>, <b2>int</b2> <b1>occurancesToReplace = 0</b1>)</li>
                        <li><b2>static string</b2> <b1>Replace</b1>(<b2>this string</b2> <b1>text</b1>, <b2>char</b2> <b1>oldText</b1>, <b2>string</b2> <b1>newText</b1>, <b2>int</b2> <b1>occurancesToReplace = 0</b1>)</li>    
                        <li><b2>static string</b2> <b1>Replace</b1>(<b2>this string</b2> <b1>text</b1>, <b2>string</b2> <b1>oldText</b1>, <b2>char</b2> <b1>newText</b1>, <b2>int</b2> <b1>occurancesToReplace = 0</b1>)</li>
                        <li><b2>static string</b2> <b1>Replace</b1>(<b2>this string</b2> <b1>text</b1>, <b2>string</b2> <b1>oldText</b1>, <b2>string</b2> <b1>newText</b1>, <b2>int</b2> <b1>occurancesToReplace = 0</b1>)</li>
                        <li><b2>static string</b2> <b1>Replace</b1>(<b2>this string</b2> <b1>text</b1>, <b2>CHAR_TYPE</b2> <b1>oldTextType</b1>, <b2>char</b2> <b1>newText</b1>, <b2>int</b2> <b1>occurancesToReplace = 0</b1>)</li>
                        <li><b2>static string</b2> <b1>Replace</b1>(<b2>this string</b2> <b1>text</b1>, <b2>CHAR_TYPE</b2> <b1>oldTextType</b1>, <b2>string</b2> <b1>newText</b1>, <b2>int</b2> <b1>occurancesToReplace = 0</b1>)</li>
                        <li><b2>static string</b2> <b1>Replace</b1>(<b2>this string</b2> <b1>text</b1>, <b2>Func{"<string, int, bool>"}</b2> <b1>identifyCondition</b1>, <b2>Func{"<string, int, string>"}</b2> <b1>replacementFunc</b1>, <b2>int</b2> <b1>occurancesToReplace = 0</b1>)</li>
                        <li><b2>static string</b2> <b1>Replace</b1>(<b2>this string</b2> <b1>text</b1>, <b2>string</b2> <b1>oldText</b1>, <b2>Func{"<string, int, bool>"}</b2> <b1>identifyCondition</b1>, <b2>Func{"<string, int, string>"}</b2> <b1>replacementFunc</b1>, <b2>int</b2> <b1>occurancesToReplace = 0</b1>)</li>
                        <li><b2>static string</b2> <b1>Replace</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>characterAmount</b1>, <b2>Func{"<string, int, bool>"}</b2> <b1>identifyCondition</b1>, <b2>Func{"<string, int, string>"}</b2> <b1>replacementFunc</b1>, <b2>int</b2> <b1>occurancesToReplace = 0</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>string</b2> <b1>text</b1>: String to manipulate</li>                    
                        <li><b2>char</b2> <b1>newText</b1>: The new character</li>                    
                        <li><b2>string</b2> <b1>newText</b1>: The new string</li>                    
                        <li><b2>char</b2> <b1>oldText</b1>: The character to replace</li>                    
                        <li><b2>string</b2> <b1>oldText</b1>: The string to replace</li>                    
                        <li><b2>CHAR_TYPE</b2> <b1>oldTextType</b1>: The CHAR_TYPE to replace</li>                    
                        <li><b2>int</b2> <b1>index</b1>: Index of the first character to replace. If negative, it wraps around the length of the string</li>                    
                        <li><b2>int</b2> <b1>characterAmount</b1>: The amount of characters of the text to replace</li>                    
                        <li><b2>int</b2> <b1>occurancesToReplace</b1>: The amount of occurrances to replace in the text. If 0, it replaces every occurance. If negative, it searches from the last to the first occurrence</li>                    
                        <li><b2>Func{"<string, int, bool>"}</b2> <b1>identifyCondition</b1>: Function that receives the current text and its current index value to evaluate and returns true if the string should count as an occurrance</li>                    
                        <li><b2>Func{"<string, int, string>"}</b2> <b1>replacementFunc</b1>: Function that takes the current string and occurrence count and returns the new string to replace the old one</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Remove" content={(
                <div>
                    <p>
                        Removes the any amount of occurrence of a string, char or CHAR_TYPE from a string.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static string</b2> <b1>Remove</b1>(<b2>this string</b2> <b1>text</b1>, <b2>char</b2> <b1>oldText</b1>, <b2>int</b2> <b1>occurancesToRemove = 0</b1>)</li>
                        <li><b2>static string</b2> <b1>Remove</b1>(<b2>this string</b2> <b1>text</b1>, <b2>string</b2> <b1>oldText</b1>, <b2>int</b2> <b1>occurancesToRemove = 0</b1>)</li>
                        <li><b2>static string</b2> <b1>Remove</b1>(<b2>this string</b2> <b1>text</b1>, <b2>CHAR_TYPE</b2> <b1>oldTextType</b1>, <b2>int</b2> <b1>occurancesToRemove = 0</b1>)</li>
                        <li><b2>static string</b2> <b1>Remove</b1>(<b2>this string</b2> <b1>text</b1>, <b2>Func{"<string, int, bool>"}</b2> <b1>identifyCondition</b1>, <b2>Func{"<string, int, bool>"}</b2> <b1>removeCondition</b1>, <b2>int</b2> <b1>occurancesToRemove = 0</b1>)</li>
                        <li><b2>static string</b2> <b1>Remove</b1>(<b2>this string</b2> <b1>text</b1>, <b2>string</b2> <b1>oldText</b1>, <b2>Func{"<string, int, bool>"}</b2> <b1>identifyCondition</b1>, <b2>Func{"<string, int, bool>"}</b2> <b1>removeCondition</b1>, <b2>int</b2> <b1>occurancesToRemove = 0</b1>)</li>
                        <li><b2>static string</b2> <b1>Remove</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>characterAmount</b1>, <b2>Func{"<string, int, bool>"}</b2> <b1>identifyCondition</b1>, <b2>Func{"<string, int, bool>"}</b2> <b1>removeCondition</b1>, <b2>int</b2> <b1>occurancesToRemove = 0</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>string</b2> <b1>text</b1>: String to manipulate</li>                    
                        <li><b2>char</b2> <b1>oldText</b1>: The character to remove</li>                    
                        <li><b2>string</b2> <b1>oldText</b1>: The string to remove</li>                    
                        <li><b2>CHAR_TYPE</b2> <b1>oldTextType</b1>: The CHAR_TYPE to remove</li>                    
                        <li><b2>int</b2> <b1>characterAmount</b1>: The amount of characters of the text to remove</li>                    
                        <li><b2>int</b2> <b1>occurancesToRemove</b1>: The amount of occurrances to remove in the text. If 0, it removes every occurance. If negative, it searches from the last to the first occurrence</li>                    
                        <li><b2>Func{"<string, int, bool>"}</b2> <b1>identifyCondition</b1>: Function that receives the current text and its current index value to evaluate and returns true if the string should count as an occurrance</li>                    
                        <li><b2>Func{"<string, int, bool>"}</b2> <b1>removeCondition</b1>: Function that takes the current string and occurrence count and returns true if it should be removed or not</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Extract" content={(
                <div>
                    <p>
                        Extracts substrings enclosed between custom delimiters (start and end "keys") from a given string. 
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static string</b2> <b1>Extract</b1>(<b2>this string</b2> <b1>source</b1>, <b2>char</b2> <b1>key</b1>, <b2>bool</b2> <b1>returnFullTag = false</b1>)</li>
                        <li><b2>static string</b2> <b1>Extract</b1>(<b2>this string</b2> <b1>source</b1>, <b2>string</b2> <b1>key</b1>, <b2>bool</b2> <b1>returnFullTag = false</b1>)</li>
                        <li><b2>static string</b2> <b1>Extract</b1>(<b2>this string</b2> <b1>source</b1>, <b2>char</b2> <b1>startKey</b1>, <b2>char</b2> <b1>endKey</b1>, <b2>bool</b2> <b1>returnFullTag = false</b1>)</li>
                        <li><b2>static string</b2> <b1>Extract</b1>(<b2>this string</b2> <b1>source</b1>, <b2>string</b2> <b1>startKey</b1>, <b2>char</b2> <b1>endKey</b1>, <b2>bool</b2> <b1>returnFullTag = false</b1>)</li>
                        <li><b2>static string</b2> <b1>Extract</b1>(<b2>this string</b2> <b1>source</b1>, <b2>char</b2> <b1>startKey</b1>, <b2>string</b2> <b1>endKey</b1>, <b2>bool</b2> <b1>returnFullTag = false</b1>)</li>
                        <li><b2>static string</b2> <b1>Extract</b1>(<b2>this string</b2> <b1>source</b1>, <b2>string</b2> <b1>startKey</b1>, <b2>string</b2> <b1>endKey</b1>, <b2>bool</b2> <b1>returnFullTag = false</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>string</b2> <b1>text</b1>: String to manipulate</li>                    
                        <li><b2>char</b2> <b1>key</b1>: The char used as both start and end delimiter.</li>                    
                        <li><b2>string</b2> <b1>key</b1>: The string used as both start and end delimiter.</li>                    
                        <li><b2>char</b2> <b1>startKey</b1>: The starting char delimiter</li>                    
                        <li><b2>string</b2> <b1>startKey</b1>: The starting string delimiter</li>                    
                        <li><b2>char</b2> <b1>endKey</b1>: The ending char delimiter</li>                    
                        <li><b2>string</b2> <b1>endKey</b1>: The ending string delimiter</li>                    
                        <li><b2>bool</b2> <b1>returnFullTag</b1>: If the returnFullTag flag is set to true, the returned string will include the delimiters themselves</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Encase" content={(
                <div>
                    <p>
                        Adds a certain string or char at the start and end of a string.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static string</b2> <b1>Encase</b1>(<b2>this char</b2> <b1>text</b1>, <b2>char</b2> <b1>wraper</b1>, <b2>int</b2> <b1>innerSpaces = 0</b1>, <b2>int</b2> <b1>wraperMultiplier = 1</b1>)</li>
                        <li><b2>static string</b2> <b1>Encase</b1>(<b2>this char</b2> <b1>text</b1>, <b2>string</b2> <b1>wraper</b1>, <b2>int</b2> <b1>innerSpaces = 0</b1>, <b2>int</b2> <b1>wraperMultiplier = 1</b1>)</li>
                        <li><b2>static string</b2> <b1>Encase</b1>(<b2>this char</b2> <b1>text</b1>, <b2>char</b2> <b1>firstWraper</b1>, <b2>char</b2> <b1>lastWraper</b1>, <b2>int</b2> <b1>innerSpaces = 0</b1>, <b2>int</b2> <b1>wraperMultiplier = 1</b1>)</li>
                        <li><b2>static string</b2> <b1>Encase</b1>(<b2>this char</b2> <b1>text</b1>, <b2>char</b2> <b1>firstWraper</b1>, <b2>string</b2> <b1>lastWraper</b1>, <b2>int</b2> <b1>innerSpaces = 0</b1>, <b2>int</b2> <b1>wraperMultiplier = 1</b1>)</li>
                        <li><b2>static string</b2> <b1>Encase</b1>(<b2>this char</b2> <b1>text</b1>, <b2>string</b2> <b1>firstWraper</b1>, <b2>char</b2> <b1>lastWraper</b1>, <b2>int</b2> <b1>innerSpaces = 0</b1>, <b2>int</b2> <b1>wraperMultiplier = 1</b1>)</li>
                        <li><b2>static string</b2> <b1>Encase</b1>(<b2>this char</b2> <b1>text</b1>, <b2>string</b2> <b1>firstWraper</b1>, <b2>string</b2> <b1>lastWraper</b1>, <b2>int</b2> <b1>innerSpaces = 0</b1>, <b2>int</b2> <b1>wraperMultiplier = 1</b1>)</li>
                        <li><b2>static string</b2> <b1>Encase</b1>(<b2>this char</b2> <b1>text</b1>, <b2>SPECIAL_CHAR</b2> <b1>specialChar</b1>, <b2>int</b2> <b1>innerSpaces = 0</b1>, <b2>int</b2> <b1>wraperMultiplier = 1</b1>)</li>
                        <li><b2>static string</b2> <b1>Encase</b1>(<b2>this string</b2> <b1>text</b1>, <b2>char</b2> <b1>wraper</b1>, <b2>int</b2> <b1>innerSpaces = 0</b1>, <b2>int</b2> <b1>wraperMultiplier = 1</b1>)</li>
                        <li><b2>static string</b2> <b1>Encase</b1>(<b2>this string</b2> <b1>text</b1>, <b2>string</b2> <b1>wraper</b1>, <b2>int</b2> <b1>innerSpaces = 0</b1>, <b2>int</b2> <b1>wraperMultiplier = 1</b1>)</li>
                        <li><b2>static string</b2> <b1>Encase</b1>(<b2>this string</b2> <b1>text</b1>, <b2>char</b2> <b1>firstWraper</b1>, <b2>char</b2> <b1>lastWraper</b1>, <b2>int</b2> <b1>innerSpaces = 0</b1>, <b2>int</b2> <b1>wraperMultiplier = 1</b1>)</li>
                        <li><b2>static string</b2> <b1>Encase</b1>(<b2>this string</b2> <b1>text</b1>, <b2>char</b2> <b1>firstWraper</b1>, <b2>string</b2> <b1>lastWraper</b1>, <b2>int</b2> <b1>innerSpaces = 0</b1>, <b2>int</b2> <b1>wraperMultiplier = 1</b1>)</li>
                        <li><b2>static string</b2> <b1>Encase</b1>(<b2>this string</b2> <b1>text</b1>, <b2>string</b2> <b1>firstWraper</b1>, <b2>char</b2> <b1>lastWraper</b1>, <b2>int</b2> <b1>innerSpaces = 0</b1>, <b2>int</b2> <b1>wraperMultiplier = 1</b1>)</li>
                        <li><b2>static string</b2> <b1>Encase</b1>(<b2>this string</b2> <b1>text</b1>, <b2>string</b2> <b1>firstWraper</b1>, <b2>string</b2> <b1>lastWraper</b1>, <b2>int</b2> <b1>innerSpaces = 0</b1>, <b2>int</b2> <b1>wraperMultiplier = 1</b1>)</li>
                        <li><b2>static string</b2> <b1>Encase</b1>(<b2>this string</b2> <b1>text</b1>, <b2>SPECIAL_CHAR</b2> <b1>specialChar</b1>, <b2>int</b2> <b1>innerSpaces = 0</b1>, <b2>int</b2> <b1>wraperMultiplier = 1</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>char</b2> <b1>text</b1>: Char to manipulate</li>                    
                        <li><b2>string</b2> <b1>text</b1>: String to manipulate</li>                    
                        <li><b2>char</b2> <b1>wrapper</b1>: Character to add at the start and at the end of the string</li>                    
                        <li><b2>string</b2> <b1>wrapper</b1>: String to add at the start and at the end of the string</li>                    
                        <li><b2>char</b2> <b1>firstWraper</b1>: Character to add at the start of the string</li>                    
                        <li><b2>char</b2> <b1>lastWraper</b1>: Character to add at the end of the string</li>                    
                        <li><b2>string</b2> <b1>firstWraper</b1>: String to add at the start of the string</li>                    
                        <li><b2>string</b2> <b1>lastWraper</b1>: String to add at the end of the string</li>                    
                        <li><b2>int</b2> <b1>innerSpaces</b1>: Adds spaces between the string and the wraper strings</li>                    
                        <li><b2>int</b2> <b1>wraperMultiplier</b1>: Amount of times to the wrapers are repeated</li>                    
                        <li><b2>SPECIAL_CHAR</b2> <b1>specialChar</b1>: Special character to encase</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Fill" content={(
                <div>
                    <p>
                        Fills a string at the start or at the the end with a certain char.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static string</b2> <b1>Fill</b1>(<b2>this char</b2> <b1>text</b1>, <b2>int</b2> <b1>totalLength</b1>, <b2>char</b2> <b1>fillChar</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                        <li><b2>static string</b2> <b1>Fill</b1>(<b2>this char</b2> <b1>text</b1>, <b2>int</b2> <b1>totalLength</b1>, <b2>string</b2> <b1>fillChar = " "</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                        <li><b2>static string</b2> <b1>Fill</b1>(<b2>this char</b2> <b1>text</b1>, <b2>int</b2> <b1>totalLength</b1>, <b2>SPECIAL_CHAR</b2> <b1>specialChar</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                        <li><b2>static string</b2> <b1>Fill</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>totalLength</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                        <li><b2>static string</b2> <b1>Fill</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>totalLength</b1>, <b2>char</b2> <b1>fillChar</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                        <li><b2>static string</b2> <b1>Fill</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>totalLength</b1>, <b2>string</b2> <b1>fillChar = " "</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                        <li><b2>static string</b2> <b1>Fill</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>totalLength</b1>, <b2>SPECIAL_CHAR</b2> <b1>specialChar</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>char</b2> <b1>text</b1>: Char to manipulate</li>                    
                        <li><b2>string</b2> <b1>text</b1>: String to manipulate</li>                    
                        <li><b2>int</b2> <b1>totalLength</b1>: Total length of the resulting string</li>                    
                        <li><b2>int</b2> <b1>indexOffset</b1>: Index offset to insert the filling. If negative, it wraps around the length of the string</li>                    
                        <li><b2>char</b2> <b1>fillChar</b1>: Character to use to fill</li>                    
                        <li><b2>string</b2> <b1>fillChar</b1>: String to use to fill</li>                    
                        <li><b2>SPECIAL_CHAR</b2> <b1>specialChar</b1>: Special character to use to fill</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Insert" content={(
                <div>
                    <p>
                        Inserts a string or char at the start or at the end of the string.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static string</b2> <b1>Insert</b1>(<b2>this char</b2> <b1>text</b1>, <b2>char</b2> <b1>newText</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                        <li><b2>static string</b2> <b1>Insert</b1>(<b2>this char</b2> <b1>text</b1>, <b2>string</b2> <b1>newText</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                        <li><b2>static string</b2> <b1>Insert</b1>(<b2>this char</b2> <b1>text</b1>, <b2>SPECIAL_CHAR</b2> <b1>specialChar</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                        <li><b2>static string</b2> <b1>Insert</b1>(<b2>this string</b2> <b1>text</b1>, <b2>char</b2> <b1>newText</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                        <li><b2>static string</b2> <b1>Insert</b1>(<b2>this string</b2> <b1>text</b1>, <b2>string</b2> <b1>newText</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                        <li><b2>static string</b2> <b1>Insert</b1>(<b2>this string</b2> <b1>text</b1>, <b2>SPECIAL_CHAR</b2> <b1>specialChar</b1>, <b2>int</b2> <b1>indexOffset = 0</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>char</b2> <b1>text</b1>: Char to manipulate</li>                    
                        <li><b2>string</b2> <b1>text</b1>: String to manipulate</li>                    
                        <li><b2>char</b2> <b1>newText</b1>: Character to insert</li>                    
                        <li><b2>string</b2> <b1>newText</b1>: String to insert</li>                    
                        <li><b2>int</b2> <b1>indexOffset</b1>: Index offset to insert the text. If negative, it wraps around the length of the string</li>                    
                        <li><b2>SPECIAL_CHAR</b2> <b1>specialChar</b1>: Special character to insert</li>                    
                    </ul>
                </div>
            )}/>	
            <Group title="Swap" content={(
                <div>
                    <p>
                        Swaps two characters in a string.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static string</b2> <b1>Swap</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>indexA</b1>, <b2>int</b2> <b1>indexB</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>string</b2> <b1>text</b1>: String to manipulate</li>                    
                        <li><b2>int</b2> <b1>indexA</b1>: Index of the first character to swap</li>                    
                        <li><b2>int</b2> <b1>indexB</b1>: Index of the second character to swap</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Shift" content={(
                <div>
                    <p>
                        Shifts the characters in a string to the left or right.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static string</b2> <b1>ShiftLeft</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>startIndex = 0</b1>, <b2>int</b2> <b1>amountOfItemsToShift = 0</b1>)</li>
                        <li><b2>static string</b2> <b1>ShiftRight</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>startIndex = 0</b1>, <b2>int</b2> <b1>amountOfItemsToShift = 0</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>string</b2> <b1>text</b1>: String to manipulate</li>                    
                        <li><b2>int</b2> <b1>startIndex</b1>: Index to start the selection</li>                    
                        <li><b2>int</b2> <b1>amountOfItemsToShift</b1>: Amount of characters to shift starting from the index. If 0, the amount is the whole string</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Shuffle" content={(
                <div>
                    <p>
                        Randomizes the order of characters in a string.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static string</b2> <b1>Shuffle</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>startIndex = 0</b1>, <b2>int</b2> <b1>amountOfItemsToShuffle = 0</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>string</b2> <b1>text</b1>: String to manipulate</li>                    
                        <li><b2>int</b2> <b1>startIndex</b1>: Index to start the selection</li>                    
                        <li><b2>int</b2> <b1>amountOfItemsToShuffle</b1>: Amount of characters to shuffle starting from the index. If 0, the amount is the whole string</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Move" content={(
                <div>
                    <p>
                        Moves a specific character or part of the string to the start or at the end.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static string</b2> <b1>Move</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>index</b1>, <b2>int</b2> <b1>movePosition = 0</b1>, <b2>int</b2> <b1>characterAmount = 1</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>string</b2> <b1>text</b1>: String to manipulate</li>                    
                        <li><b2>int</b2> <b1>index</b1>: Index to start the selection</li>                    
                        <li><b2>int</b2> <b1>movePosition</b1>: Index position to insert the text after removing it from the original string. If negative, it wraps around the length of the string</li>                    
                        <li><b2>int</b2> <b1>characterAmount</b1>: Amount of characters to move starting from the index. If 0, the amount is the whole string</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Concat" content={(
                <div>
                    <p>
                        Concatenates a list or array of characters or strings into one string.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static string</b2> <b1>Concat</b1>(<b2>this char[]</b2> <b1>textList</b1>, <b2>char</b2> <b1>separator = ' '</b1>)</li>
                        <li><b2>static string</b2> <b1>Concat</b1>(<b2>this char[]</b2> <b1>textList</b1>, <b2>SPECIAL_CHAR</b2> <b1>specialChar</b1>)</li>
                        <li><b2>static string</b2> <b1>Concat</b1>(<b2>this char[]</b2> <b1>textList</b1>, <b2>string</b2> <b1>separator = " "</b1>)</li>
                        <li><b2>static string</b2> <b1>Concat</b1>(<b2>this string[]</b2> <b1>textList</b1>, <b2>char</b2> <b1>separator = ' '</b1>)</li>
                        <li><b2>static string</b2> <b1>Concat</b1>(<b2>this string[]</b2> <b1>textList</b1>, <b2>SPECIAL_CHAR</b2> <b1>specialChar</b1>)</li>
                        <li><b2>static string</b2> <b1>Concat</b1>(<b2>this string[]</b2> <b1>textList</b1>, <b2>string</b2> <b1>separator = " "</b1>)</li>
                        <li><b2>static string</b2> <b1>Concat</b1>(<b2>this List{"<char>"}</b2> <b1>textList</b1>, <b2>char</b2> <b1>separator = ' '</b1>)</li>
                        <li><b2>static string</b2> <b1>Concat</b1>(<b2>this List{"<char>"}</b2> <b1>textList</b1>, <b2>SPECIAL_CHAR</b2> <b1>specialChar</b1>)</li>
                        <li><b2>static string</b2> <b1>Concat</b1>(<b2>this List{"<char>"}</b2> <b1>textList</b1>, <b2>string</b2> <b1>separator = " "</b1>)</li>
                        <li><b2>static string</b2> <b1>Concat</b1>(<b2>this List{"<string>"}</b2> <b1>textList</b1>, <b2>char</b2> <b1>separator = ' '</b1>)</li>
                        <li><b2>static string</b2> <b1>Concat</b1>(<b2>this List{"<string>"}</b2> <b1>textList</b1>, <b2>SPECIAL_CHAR</b2> <b1>specialChar</b1>)</li>
                        <li><b2>static string</b2> <b1>Concat</b1>(<b2>this List{"<string>"}</b2> <b1>textList</b1>, <b2>string</b2> <b1>separator = " "</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>char[]</b2> <b1>textList</b1>: Char array to concatenate</li>                    
                        <li><b2>string[]</b2> <b1>textList</b1>: String array to concatenate</li>                    
                        <li><b2>List{"<char>"}</b2> <b1>textList</b1>: Char list to concatenate</li>                    
                        <li><b2>List{"<string>"}</b2> <b1>textList</b1>: String list to concatenate</li>                    
                        <li><b2>char</b2> <b1>separator</b1>: Character to use as a separator to concatenate the list</li>                    
                        <li><b2>string</b2> <b1>separator</b1>: String to use as a separator to concatenate the list</li>                    
                        <li><b2>SPECIAL_CHAR</b2> <b1>specialChar</b1>: Special character to use as a separator to concatenate the list</li>                    
                    </ul>
                </div>
            )}/>
            <Group title="Split" content={(
                <div>
                    <p>
                        Splits a string into a list of strings based on a splitting parameter.
                    </p>
                    <h5 className="c-light-1">Signature</h5>
                    <ul className="property-list">
                        <li><b2>static List{"<string>"}</b2> <b1>Split</b1>(<b2>this string</b2> <b1>text</b1>, <b2>string</b2> <b1>splitText</b1>, <b2>int</b2> <b1>occurancesToSplit = 0</b1>)</li>
                        <li><b2>static List{"<string>"}</b2> <b1>Split</b1>(<b2>this string</b2> <b1>text</b1>, <b2>CHAR_TYPE</b2> <b1>charType</b1>, <b2>int</b2> <b1>occurancesToSplit = 0</b1>)</li>
                        <li><b2>static List{"<string>"}</b2> <b1>Split</b1>(<b2>this string</b2> <b1>text</b1>, <b2>SPECIAL_CHAR</b2> <b1>specialChar</b1>, <b2>int</b2> <b1>occurancesToSplit = 0</b1>)</li>
                        <li><b2>static List{"<string>"}</b2> <b1>Split</b1>(<b2>this string</b2> <b1>text</b1>, <b2>Func{"<string, int, bool>"}</b2> <b1>identifyCondition</b1>, <b2>Func{"<int, bool>"}</b2> <b1>splitCondition</b1>, <b2>int</b2> <b1>occurancesToSplit = 0</b1>)</li>
                        <li><b2>static List{"<string>"}</b2> <b1>Split</b1>(<b2>this string</b2> <b1>text</b1>, <b2>string</b2> <b1>splitText</b1>, <b2>Func{"<string, int, bool>"}</b2> <b1>identifyCondition</b1>, <b2>Func{"<int, bool>"}</b2> <b1>splitCondition</b1>, <b2>int</b2> <b1>occurancesToSplit = 0</b1>)</li>
                        <li><b2>static List{"<string>"}</b2> <b1>Split</b1>(<b2>this string</b2> <b1>text</b1>, <b2>int</b2> <b1>characterAmount</b1>, <b2>Func{"<string, int, bool>"}</b2> <b1>identifyCondition</b1>, <b2>Func{"<int, bool>"}</b2> <b1>splitCondition</b1>, <b2>int</b2> <b1>occurancesToSplit = 0</b1>)</li>
                    </ul>
                    <h5 className="c-light-1">Parameters</h5>
                    <ul className="property-list">
                        <li><b2>string</b2> <b1>text</b1>: String to manipulate</li>                    
                        <li><b2>char</b2> <b1>splitText</b1>: The character to search for and split the text</li>                    
                        <li><b2>string</b2> <b1>splitText</b1>: The string to search for and split the text</li>                    
                        <li><b2>CHAR_TYPE</b2> <b1>charType</b1>: The CHAR_TYPE to search for and split the string</li>                    
                        <li><b2>SPECIAL_CHAR</b2> <b1>specialChar</b1>: The SPECIAL_CHAR to search for and split the string</li>                    
                        <li><b2>int</b2> <b1>characterAmount</b1>: The amount of characters of the string to search for and split the string</li>                    
                        <li><b2>int</b2> <b1>occurancesToSplit</b1>: The amount of occurrances to split the text. If 0, it splits every occurance. If negative, it searches from the last to the first occurrence</li>                    
                        <li><b2>Func{"<string, int, bool>"}</b2> <b1>identifyCondition</b1>: Function that receives the current text and its current index value to evaluate and returns true if the string should count as an occurrance</li>                    
                        <li><b2>Func{"<int, bool>"}</b2> <b1>splitCondition</b1>: Function that takes the current string and occurrence count and returns true if it should be splited in that occurrence or not</li>                    
                    </ul>
                </div>
            )}/>

            <h3 className="p-2">Examples</h3>
            <p className="pad-left-3">
                This section provides detailed examples on how to use the Textop utilities methods effectively.
            </p>
            <Group title="Example 01: String Inspection" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Utilities/Textop/Textop - 01.jpg" alt=""/>            
                    <p>
                        This script demonstrates various string inspection operations. 
                        It retrieves a special character based on an enum, checks if a string contains a specific character, counts occurrences of a letter and verifies whether a string starts or ends with specific words.
                        The example uses built-in methods like Textop.GetSpecial(), Contains(), Count() and Check() to perform these checks, logging the results to the console.
                    </p>
                    <img className="block-center mar-bottom-3 img-border w-65" src="images/Library/Utilities/Textop/Textop - 02.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 02: String Modification" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Utilities/Textop/Textop - 03.jpg" alt=""/>            
                    <p>
                        This example demonstrates string manipulation in Unity using the Magikus library. 
                        It includes three operations: reversing a string, shifting characters one position to the right and inserting a substring at a specific position. 
                        The Run() method logs the results of each operation, showcasing how the original string is modified in different ways.                        
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Utilities/Textop/Textop - 04.jpg" alt=""/>            
                </div>
            )}/>
            <Group title="Example 03: Complex String Manipulation" content={(
                <div>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Utilities/Textop/Textop - 05.jpg" alt=""/>            
                    <p>
                        This script demonstrates several string manipulation techniques in Unity using the Magikus library.
                        It replaces the first occurrence of "abc" with "XYZ", moves the character '1' to the end of the string and shuffles the characters in the string "abc123abc" randomly.
                        Each operation is logged to the console for visualization.                        
                    </p>
                    <img className="block-center mar-bottom-3 img-border" src="images/Library/Utilities/Textop/Textop - 06.jpg" alt=""/>            
                </div>
            )}/>

            <h3 className="p-2">Notes</h3>
            <ul>
                <li>When using the methods that wrap indexes, such as GetIndex and GetChar, remember that the offset is circular, meaning an offset of -1 will wrap around to the last character in the string.</li>
                <li>Many methods accept enums such as SPECIAL_CHAR and COMPARISON to allow for highly customizable conditions and operations.</li>
                <li>Methods that involve shifting or moving characters like ShiftLeft or MoveToEnd modify the order but do not change the original string. Instead, they return a new string.</li>
            </ul>
       </div>
    );
}