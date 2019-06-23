import checkoutState from './checkoutState';
import {
    DATA_LOAD, ITEM_HEADER_COLLAPSE,
    PROMO_HEADER_COLLAPSE, PROMO_CODE_APPLIED
} from './actionTypes';
import ItemDataService from '../services/dummy.json'

function checkoutReducer(state = checkoutState, action) {
    const newState = { ...state };

    if (action.type === DATA_LOAD) {
        console.log('data load', action.payload);
        newState.subTotal = ItemDataService.subTotal;
        newState.itemDetailsHeader = " Click for Item Details + ";
        newState.promoCodeHeader = " Apply promo code + ";
        newState.zipCode = ItemDataService.zip;
        newState.pickUpSavings = ItemDataService.pickUpSavings;
        newState.taxes = ItemDataService.taxes;
        newState.total = ItemDataService.taxes + ItemDataService.pickUpSavings + ItemDataService.subTotal;
        newState.total = newState.total.toFixed(2);
        return newState;

    }

    if (action.type === ITEM_HEADER_COLLAPSE) {
        newState.isHeaderCollapsed = !newState.isHeaderCollapsed;
        if (!newState.isHeaderCollapsed) {
            newState.itemDetailsHeader = " Click for Item Details + ";
        }
        else {
            newState.itemDetailsHeader = " Hide item details -";
        }
        console.log('collapse');
        return newState;
    }
    if (action.type === PROMO_HEADER_COLLAPSE) {
        newState.isPromoCollapsed = !newState.isPromoCollapsed;
        if (!newState.isPromoCollapsed) {
            newState.promoCodeHeader = " APPLY PROMO CODE + ";
            newState.total = ItemDataService.taxes + ItemDataService.pickUpSavings + ItemDataService.subTotal;
            newState.total = newState.total.toFixed(2);
            newState.subTotal = ItemDataService.subTotal;
        }
        else {
            newState.promoCodeHeader = " REMOVE PROMO CODE -";
        }
        console.log('promo');
        return newState;
    }

    if (action.type === PROMO_CODE_APPLIED) {
        newState.subTotal = (newState.subTotal - (newState.subTotal * .1));
        newState.total = state.taxes + state.pickUpSavings + newState.subTotal;
        newState.total = newState.total.toFixed(2);
        newState.subTotal = newState.subTotal.toFixed(2);
        console.log('promo applied', newState.subTotal);
        return newState;
    }
    return state;
}

export default checkoutReducer;