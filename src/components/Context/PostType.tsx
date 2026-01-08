export interface NewPostForm {
    postTitle: string;
    postDescription: string;
    postCategory: string,
    postLink?: string;
}

export const CATEGORY_LABELS = {
    NONE: "None",
    PRODUCT: "Product", 
    MARKETING: "Marketing", 
    SALES: "Sales", 
    CUSTOMER: "Customer Success", 
    OPERATIONS: "Operations", 
    FINANCE: "Finance",
};
