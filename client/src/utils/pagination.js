const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#fff",
    },
  },
}));

export default function BasicPagination() {
  const classes = useStyles();
  return <Pagination classes={{ ul: classes.ul }} count={10} />;
}
