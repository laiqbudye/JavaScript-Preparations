callback:-
    is a function which is passed as an argument to other function.
    there are two types of callback functions:- 
        1. synchronous
        2. asynchronous
        
        1. synchronous - this function gets execute synchrnously without any blocking operation.
           e.g
              function sayHello(text, callback) {
                callback(text)          // here it will get called synchronously/immediately
              }
              
              function print(data){
                console.log(data)
              }

              sayHello("Hello", print)
              


      2. asynchronous - this function gets called when an async operation gets completed.
        e.g
           function print() {
              console.log("Timeout End");
           }
           setTimeout(print, 1000);   // here print function will get called after 1 second


          drawback using callbacks
            by using callbacks we can go into callback hell issues.
            e.g
              //order processing workflow using callback
              
              getUserInfo(userId, (err, userInfo) => {
                getProductQuantity(product, (err, productInfo) => {
                  const orderInfo = {userInfo, productInfo}
                    processPayment(orderInfo, (err, paymentInfo) => {
                      placeOrder(paymentInfo, (err, placeOrderInfo) => {
                          // show order placed notification
                      })
                    })
                })
              })
              
            
            this is callback hell / pyramid of doom. 
            in the above example if nested calls increased then it will be difficult to understand the flow of code.
            
            to overcome this problem Promise comes into picture.
              
              
