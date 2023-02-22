import { UserStorage } from '../Helpers/Keys'
import { GET_OBJECT_INFO } from '../Services/LocalStorage'

export const GetHeaders = () => {
    const user = GET_OBJECT_INFO(UserStorage)
    return {
        headers: {
            'Authorization': 'Bearer ' + user.token
        }
    }
}