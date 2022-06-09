export const userColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "photo",
    headerName: "Photo",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.photo} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "isAdmin",
    headerName: "Admin",
    width: 100,
  },
];


export const productColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "photo",
    headerName: "Photo",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.photo} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "isAdmin",
    headerName: "Admin",
    width: 100,
  },
];