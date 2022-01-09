/**
 * Author: Serhii Salatskyi <xsalat01@stud.fit.vutbr.cz>
 */

import { createContext } from "react";

const SpotContext = createContext({
    needReload: true,
    setNeedReload: () => {}
});
 
export default SpotContext;
