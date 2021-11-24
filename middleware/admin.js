export default function({ store, redirect }) {
    const isAdmin = !!store.state.user.is_admin
    if (!isAdmin) {
        return redirect('/')
    }
}
