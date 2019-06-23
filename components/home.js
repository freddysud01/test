import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Tooltip } from 'react-native-elements';
import { connect } from 'react-redux';
import loadData from '../store/actionCreator';
import { Button, Image, TextInput } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
function Home(props) {
    return (
        <View style={storeContainer.container}>

            <Button style={storeContainer.section}
                onPress={props.onloadData.bind(this, 4)}
                title="BEGIN CHECKOUT"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <View style={storeContainer.section}>
                <Text style={storeContainer.first}>Subtotal </Text>
                <Text style={storeContainer.second}>${props.subTotal} </Text>
            </View>
            <View style={storeContainer.section}>
                <Tooltip backgroundColor='white' popover={<Text>Picking up your order in the store helps cut costs, we pass on those savings to you</Text>}>
                    <Text style={storeContainer.u}>Pickup Savings</Text>
                </Tooltip>
                {/* <Text style={storeContainer.u}>Pickup Savings </Text> */}
                <Text style={storeContainer.redColor}> {props.savings}</Text>
            </View>
            <View style={storeContainer.section}>
                <Text style={storeContainer.u}>Est. taxes & fees based on {props.zipCode} </Text>
                <Text style={storeContainer.redColor}> {props.taxes}</Text>
            </View>
            <View style={storeContainer.section}>
                <Text style={storeContainer.totalFirst}>Est Total </Text>
                <Text style={storeContainer.totalFirst}>
                    ${props.total}
                </Text>
            </View>
            <View style={{ flexDirection: 'column', flex: 1 }}>
                <Collapse style={{ flexDirection: 'column', flex: 1 }} isCollapsed={props.isHeaderCollapsed} onToggle={props.onToggleItemHeader}               >
                    <CollapseHeader>
                        <Text style={storeContainer.u}>{props.itemDetailsHeader} </Text>
                    </CollapseHeader>
                    <CollapseBody style={storeContainer.section} >

                        <Image style={{ flexShrink: 1 }}
                            source={require('../assets/chair.jpeg')}
                        />
                        <Text style={{ flex: 1 }}>Essentials by OFM ESS-3085 Racing Style leather Gaming chair, Red </Text>

                    </CollapseBody>
                </Collapse>
            </View>

            <Collapse style={{ flexDirection: 'column', flex: 1, marginTop: '12%' }} isCollapsed={props.isPromoCollapsed}
                onToggle={props.onTogglePromoHeader}
            >
                <CollapseHeader>
                    <Text style={storeContainer.u}>{props.promoCodeHeader} </Text>
                </CollapseHeader>
                <CollapseBody
                    style={storeContainer.section} >

                    <TextInput style={{ flex: 1, height: 40 }} value="PROMO123"
                    />
                    <Button style={{ flex: 1, height: 60 }}
                        onPress={props.onApplyPromoCode}
                        title="Apply"
                        color="#0000ff"
                    />
                </CollapseBody>
            </Collapse>

        </View>
    )
}

const storeContainer = StyleSheet.create({
    container:
    {
        flex: 1,
        flexDirection: 'column',
        margin: '10%',
        height: '90%',
        width: '80%'

    },
    section: {

        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between'
    },
    subsection: {

        flexDirection: 'row',
        flex: 1,
        backgroundColor: 'red',

    },
    first:
    {

        color: 'silver'
    },
    second:
    {

        color: 'black',
        fontWeight: 'bold'
    },
    u:
    {
        color: 'silver',
        textDecorationLine: 'underline'
    },
    redColor:
    {
        color: 'red',
        fontWeight: 'bold'
    },
    totalFirst:
    {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 25

    },
});

const mapStateToProps = (state) => {
    return (
        {
            id: state.id,
            itemDetailsHeader: state.itemDetailsHeader,
            subTotal: state.subTotal,
            promoCodeHeader: state.promoCodeHeader,
            zipCode: state.zipCode,
            savings: state.pickUpSavings,
            taxes: state.taxes,
            isHeaderCollapsed: state.isHeaderCollapsed,
            isPromoCollapsed: state.isPromoCollapsed,
            total: state.total
        }
    );
}

const mapDispatchToProps = dispatch => {
    console.log(dispatch);
    return {
        onloadData: (data) => dispatch({ type: 'DATA_LOAD', payload: data }),
        onToggleItemHeader: () => dispatch({ type: 'ITEM_HEADER_COLLAPSE' }),
        onTogglePromoHeader: () => dispatch({ type: 'PROMO_HEADER_COLLAPSE' }),
        onApplyPromoCode: () => dispatch({ type: 'PROMO_CODE_APPLIED' })

    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);

