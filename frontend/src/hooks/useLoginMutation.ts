import { useMutation } from "react-query"
import { user } from "services/user"


function useLoginMutation() {
    const { mutate, data, status, error } = useMutation({
        mutationKey: ['login'],
        mutationFn: (data: {email: string, password: string}) => user.login(data),
    })

    return { mutate, data, status, error }
}

export { useLoginMutation}
