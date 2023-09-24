export default defineComponent({
    render() {
        return h(
            'footer', // type
            { class: "footer", '^width': '100' }, // props
            'The Footer',
        )
    }
}) 