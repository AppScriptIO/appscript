import getUrlPathAsArray from 'appscript/utilityFunction/conditionCheck/getUrlPathAsArray.js'

export default async (self) => {
    let context = self.context
    let pathArray = await getUrlPathAsArray(self)
    if(pathArray[1] == null) {
        return false
    } else {
        return pathArray[1]
    }
}