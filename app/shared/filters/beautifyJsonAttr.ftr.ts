/// <reference path="../../app.d.ts" />

module Uichallenge {

    export function beautifyJsonAttr() {

        return (input) => {

            var result = '';

            if(input && angular.isString(input)) {
                result = input.replace(/[/_/]/g, ' ');
            } else {
                result = input;
            }

            return result.charAt(0).toUpperCase() + result.slice(1);
        }
    }


}

app.filter('beautifyJsonAttr', Uichallenge.beautifyJsonAttr);