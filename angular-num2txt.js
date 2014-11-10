'use strict';

angular.module('angular-num2txt', [])

  /* this is a filter that converts numbers to text
  *  i.e. $345.67  becomes Three Hundred Fort-Five and 67/100
  *  to use, simply add | num2txt to the bound model
  *  i.e. {{ number | num2txt }}
  */
  .filter('num2txt', function() {
    return function(value) {
      // console.log("num2txt called...")
      
      // number to text function 
      var convert = function(number) {
        // console.log("nbr2txt called...")
        if (typeof(number) == "string") {
          var currency = number;
          //convert if string, remove dollar sign, commas
          number = currency.replace(/[^0-9\.]+/g,"");
        }
        var ones = [
                    "" 
                    , "One"
                    , "Two"
                    , "Three"
                    , "Four"
                    , "Five"
                    , "Six"
                    , "Seven"
                    , "Eight"
                    , "Nine"
                    , "Ten"
                    , "Eleven"
                    , "Twelve"
                    , "Thirteen"
                    , "Fourteen"
                    , "Fifteen"
                    , "Sixteen"
                    , "Seventeen"
                    , "Eighteen"
                    , "Nineteen"
                  ];
        var tens = [
                    ""
                    , ""
                    , "Twenty"
                    , "Thirty"
                    , "Forty"
                    , "Fifty"
                    , "Sixty"
                    , "Seventy"
                    , "Eighty"
                    , "Ninety"
                  ];

        var cents = number - (Math.floor(number));
        cents = Math.round(cents * 100);

        var nbr = Math.floor(number);

        var tn = Math.floor(nbr / 1000000000000);
        nbr -= tn * 1000000000000;
        var bn = Math.floor(nbr / 1000000000);
        nbr -= bn * 1000000000;
        var gn = Math.floor(nbr / 1000000);
        nbr -= gn * 1000000;
        var kn = Math.floor(nbr / 1000);
        nbr -= kn * 1000;
        var hn = Math.floor(nbr / 100);
        nbr -= hn * 100;
        var dn = Math.floor(nbr / 10);
        nbr -= dn * 10;
        var n = nbr % 10;

        var res = "";
        if(tn) {
          res += (res.length == 0 ? "" : " ") + convert(tn) + " Trillion";
        }
        if(bn) {
          res += (res.length == 0 ? "" : " ") + convert(bn) + " Billion";
        }
        if(gn) {
          res += (res.length == 0 ? "" : " ") + convert(gn) + " Million";
        }
        if(kn) {
          res += (res.length == 0 ? "" : " ") + convert(kn) + " Thousand";
        }
        if(hn) {
          res += (res.length == 0 ? "" : " ") + convert(hn) + " Hundred";
        }

        if(dn || n) {
          if(res.length > 0) {
            res += " ";
          }
          if(dn < 2) {
            res += ones[dn * 10 + n];
          }
          else {
            res += tens[dn];
            if(n) {
              res += "-" + ones[n];
            }
          }
        }

        if(cents) {
          res += (res.length == 0 ? "" : " and ") + cents + "/100";
        } 

        if(res.length == 0) {
          res = "Zero";
        }
        return res;
      }

      // avoid an exception being thrown during dirty checking before the state is defined
      if(!value) {
        return false;
      }
      else {
        return convert(value);
      }
    }
  })

// end file
;