export default theme => ({
    root: {
        paddingTop: theme.spacing.unit * 3.5,
        paddingBottom: theme.spacing.unit * 2
    },
    details__header: {
        position: "relative",
        paddingBottom: theme.spacing.unit * 2
    },
    details__headerbutton: {
        position: "absolute",
        right: theme.spacing.unit * 3,
        top: 0
    }
});
