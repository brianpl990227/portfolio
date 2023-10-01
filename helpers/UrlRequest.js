const APIDomain = (process.env.NODE_ENV === "development") ? "http://localhost:5109/api/" : "http://salastransp-001-site10.atempurl.com/api/"
export const APIFiles = (process.env.NODE_ENV === "development") ? "http://localhost:5109/"  : "http://salastransp-001-site10.atempurl.com/"

//Comments

export const SaveCommentUrl = APIDomain + 'message'