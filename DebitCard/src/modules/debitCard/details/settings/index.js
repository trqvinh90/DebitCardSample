import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react';

import { DebitCardNavigation } from '../../../../constants/route.const';
import { SettingOption } from '../../../../components';
import IconTopup from './icon_topup.svg';
import IconLimit from './icon_limit.svg';
import IconFreeze from './icon_freeze.svg';
import Store from '../../store';

const Settings = () => {
    const { navigate } = useNavigation();
    const [cardFreeze, setCardFreeze] = useState(false);

    return (
        <View style={{ paddingHorizontal: 24, paddingBottom: 24 }}>
            <SettingOption
                icon={<IconTopup />}
                containerStyle={{ marginTop: 32 }}
                option="Top-up account"
                desc="Deposit money to your account to use with card"
            />
            <SettingOption
                icon={<IconLimit />}
                containerStyle={{ marginTop: 32 }}
                option="Weekly spending limit"
                desc="You haven’t set any spending limit on card"
                isSwitch
                isChecked={Store.weeklyLimit > 0}
                onPress={() => {
                    if (Store.weeklyLimit > 0)
                        Store.setWeeklyLimit();
                    else
                        navigate(DebitCardNavigation.WeeklyLimit)

                }}
            />
            <SettingOption
                icon={<IconFreeze />}
                containerStyle={{ marginTop: 32 }}
                option="Freeze card"
                desc="Your debit card is currently active"
                isSwitch
                isChecked={cardFreeze}
                onPress={() => setCardFreeze(!cardFreeze)}
            />
        </View>
    );
};

export default observer(Settings);
