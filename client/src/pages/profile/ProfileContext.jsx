/**
 * Author: Oleksii Korniienko <xkorni02@stud.fit.vutbr.cz>
 */

import { createContext } from "react";

const ProfileContext = createContext({
    needReload: true,
    setNeedReload: () => {}
});

export default ProfileContext;