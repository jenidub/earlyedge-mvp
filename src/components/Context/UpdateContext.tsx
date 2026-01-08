import { createContext }  from "react";

interface CATEGORY_LABELS {
    PRODUCT: "Product", 
    MARKETING: "Marketing", 
    SALES: "Sales", 
    CUSTOMER: "Customer Success", 
    OPERATIONS: "Operations", 
    FINANCE: "Finance",
};

export interface Update {
    updateTitle: string;
    updateDueDate: string;
    updateDescription: string;
    updateImage?: string;
    updateCategory: CATEGORY_LABELS,
    isUpdateCompleted: boolean;
}

interface UpdateListContextType {
    updateList: Update[]
    setUpdateList: (updateList: Update[]) => void;
}

const UpdateListContext = createContext<UpdateListContextType>({
    updateList: [],
    setUpdateList: () => {}
})

export default UpdateListContext;
