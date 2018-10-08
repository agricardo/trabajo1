const data = [
    {
    order: "ricardo",
    day: 16,
    priority: "low"
},
{
    order: "raul",
    day: 24,
    priority: "low"
},
{
    order: "raul",
    day: 24,
    priority: "low"
},
{
    order: "raul",
    day: 24,
    priority: "low"
},
{
    order: "raul",
    day: 24,
    priority: "low"
},
{
    order: "raul",
    day: 24,
    priority: "low"
},
{
    order: "raul",
    day: 24,
    priority: "low"
},
{
    order: "raul",
    day: 24,
    priority: "low"
},
{
    order: "raul",
    day: 24,
    priority: "low"
},
{
    order: "raul",
    day: 24,
    priority: "low"
},
{
    order: "ronald",
    day: 36,
    priority: "low"
}

];










///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                                               //
//                                                                                                                                               //
//  ////         //     ///////////           ////////////////   /////////////     ////////////             ///             ////////////         //
//  //  //       //     //       //                 //           //         //     //                     //   //           //        //         //
//  //  //       //     //       //                 //           //         //     //                    //     //          //        //         //
//  //   ///     //     //       //                 //           //         //     //                   //       //         //        //         //
//  //    ///    //     //       //                 //           //         //     //                  //         //        ///////////          //
//  //     ///   //     //       //    ****         //           //         //     //                 ///////////////       //       //          //
//  //      ///  //     //       //                 //           //         //     //                //             //      //        //         //
//  //       /// //     //       //                 //           //         //     //               //               //     //         //        //
//  //        ////      ///////////                 //           /////////////     /////////////   //                 //    //          //       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




function buscar(){
for (var j = 0; j < data.length; j++){

    console.log(data[j].order);
    document.getElementById("table").innerHTML +='<tr><td><table><tbody><tr><td>' + data[j].order + '</td>'+ '<td>' + data[j].day + '</td>'+ '<td>' + data[j].priority + '</td>' +'</tr></tbody></table></td></tr>';
    
    
    }
}

function add() {

    document.getElementById("table").innerHTML +='<tr><td><table><tbody><tr id="contenido"><td id="order">' + data[j].order + '</td></tr></tbody></table></td></tr>';
};