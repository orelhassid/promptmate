import React from "react";
import Table from "./views/Table";
import Gallery from "./views/Gallery";
import Board from "./views/Board";
import List from "./views/List";
import Calendar from "./views/Calendar";
import Context from "./views/llectionContext";
import CollectionContext from "./context/CollectionProvider";

const Collection = ({
  data,
  view,
  fields,
  pageSize,
  filter,
  sorting,
  groupBy,
  onItemClick,
  actions,
}) => {
  const getViewComponent = () => {
    switch (view) {
      case "gallery":
        return <CollectionGallery fields={fields} />;
      case "board":
        return <CollectionBoard fields={fields} />;
      case "list":
        return <CollectionList fields={fields} />;
      case "calendar":
        return <CollectionCalendar fields={fields} />;
      case "table":
      default:
        return <CollectionTable fields={fields} />;
    }
  };

  const ViewComponent = getViewComponent();

  return (
    <CollectionContext.Provider
      value={{
        data,
        onItemClick,
        onEdit: actions.edit,
        onDelete: actions.delete,
        onCustomAction: actions.custom,
      }}
    >
      <div>
        {/* Apply filters, sorting, pagination, and groupBy logic here */}
        {ViewComponent}
      </div>
    </CollectionContext.Provider>
  );
};

export default Collection;
