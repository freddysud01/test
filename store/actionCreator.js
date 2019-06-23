import {DATA_LOAD,ITEM_HEADER_COLLAPSE,PROMO_HEADER_COLLAPSE} from './actionTypes';

export function loadData(payload) {
    return {
      type: DATA_LOAD,
       payload
      }
};

export function ToggleItemDetails(payload)
{
    return{
        type: ITEM_HEADER_COLLAPSE,
        payload
    }
}

export function TogglePromoDetails(payload)
{
    return{
        type: PROMO_HEADER_COLLAPSE,
        payload
    }
}

export function PromoCodeApplied(payload)
{
    return{
        type: PROMO_CODE_APPLIED,
        payload
    }
}