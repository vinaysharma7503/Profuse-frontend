import { deleteReq, getReq, patchReq, postReq } from "@RootService";

import apiEndPoints from "./apiEndPoints";

const { USERSLIST, SIGNUP, USERDASHBOARD, CHANGEUSERSTATUS, DELETEUSER, CATEGORYLIST, CREATECATEGORY, CREATEPRODUCT, PRODUCTLIST, DELETEPRODUCT, INVESTAMOUNT, TRANSACTIONSLIST, DELETEINVESTPRODUCT } = apiEndPoints;

export const getUserListData = async (page: any, cb: any) => {
    try {
        let url: any
        if (page) {
            url = `${USERSLIST}?page=${page}`
        }
        const result = await getReq(url)
        return cb(result)
    } catch (error: any) {
        return error?.response
    }
}

export const signupData = async (data: any, cb: any) => {
    try {
        const result = await postReq(SIGNUP, data)
        return cb(result)
    } catch (error: any) {
        return cb(error?.response)
    }
}

export const getUserDashboardData = async (cb: any) => {
    try {
        const result = await getReq(USERDASHBOARD)
        return cb(result)
    } catch (error: any) {
        return cb(error?.response)
    }
}

export const changeUserStatusData = async (data: any, cb: any) => {
    try {
        const result = await patchReq(CHANGEUSERSTATUS, data)
        return cb(result)
    } catch (error: any) {
        return cb(error?.response)
    }
}
export const deleteUserData = async (data: any, cb: any) => {
    try {
        const result = await deleteReq(DELETEUSER, data)
        return cb(result)
    } catch (error: any) {
        return cb(error?.response)
    }
}

export const getProductListData = async (page: any, cb: any) => {
    try {
        let url: any
        if (page) {
            url = `${PRODUCTLIST}?page=${page}`
        }
        const result = await getReq(url)
        return cb(result)
    } catch (error: any) {
        return error?.response
    }
}

export const productData = async (data: any, cb: any) => {
    try {
        const result = await postReq(CREATEPRODUCT, data)
        return cb(result)
    } catch (error: any) {
        return cb(error?.response)
    }
}

export const getCategoryListData = async (page: any, cb: any) => {
    try {
        let url: any
        if (page) {
            url = `${CATEGORYLIST}?page=${page}`
        }
        const result = await getReq(url)
        return cb(result)
    } catch (error: any) {
        return error?.response
    }
}

export const categoryData = async (data: any, cb: any) => {
    try {
        const result = await postReq(CREATECATEGORY, data)
        return cb(result)
    } catch (error: any) {
        return cb(error?.response)
    }
}

export const deleteProductData = async (data: any, cb: any) => {
    try {
        const result = await deleteReq(DELETEPRODUCT, data)
        return cb(result)
    } catch (error: any) {
        return cb(error?.response)
    }
}

export const investAmountData = async (data: any, cb: any) => {
    try {
        const result = await postReq(INVESTAMOUNT, data)
        return cb(result)
    } catch (error: any) {
        return cb(error?.response)
    }
}

export const getTransactionsListData = async (page: any, cb: any) => {
    try {
        let url: any
        if (page) {
            url = `${TRANSACTIONSLIST}?page=${page}`
        }
        const result = await getReq(url)
        return cb(result)
    } catch (error: any) {
        return error?.response
    }
}

export const deleteTransactionData = async (data: any, cb: any) => {
    try {
        console.log(data, 'dat');

        const result = await deleteReq(DELETEINVESTPRODUCT, data)
        return cb(result)
    } catch (error: any) {
        return cb(error?.response)
    }
}

export const deleteTrProductData = async (data: any, cb: any) => {
    try {
        let url = `${DELETEINVESTPRODUCT}?id=${data?._id}`
        const result = await deleteReq(url, data)
        return cb(result)
    } catch (error: any) {
        return cb(error?.response)
    }
}