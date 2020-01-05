import React, { Component } from 'react';
import Column from "./column"
class tableC extends Component {
    state = {  }
    render() { 
        return ( 
            <table>
               <tbody>
                    <tr>
                        <Column/>
                    </tr>
               </tbody>
            </table>
         );
    }
}
 
export default tableC;