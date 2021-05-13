import React, { useState } from 'react';
import { FlatList, Platform, StatusBar, View, onPress } from 'react-native';
import ListItem from '../components/lists/ListItem';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import Screen from '../components/Screen';

const initialMessages = [
    {
        id: 1,
        title: 'Alex Frigura',
        description: 'Hey! Is this item still available?',
        image: require('../assets/alex.jpg')
    },
    {
        id: 2,
        title: 'Alex Frigura',
        description: "I'm interested in this item. When will you be able to post it?",
        image: require('../assets/alex.jpg')
    },
]

function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing ] = useState(false);

    const handleDelete = message => {
        setMessages(messages.filter(m => m.id !==message.id));
    }

    return (
        <Screen>
        <FlatList 
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({ item }) => (
            <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)}/>)}
            /> 
            )}
            ItemSeparatorComponent={ListItemSeparator}
            refreshing={refreshing}
            onRefresh={() => {
                setMessages([
                    {
                        id: 2,
                        title: 'T2',
                        description: 'D2',
                        image: require('../assets/alex.jpg')
                    },
                ])
            }}
            />
         </Screen>
    );
}

export default MessagesScreen;