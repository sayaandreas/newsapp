import React from 'react';
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';
import moment from 'moment'

class TopHeadlines extends React.PureComponent {

    renderLoading = () => {
        return (
            <View style={{ flex: 1, padding: 20 }}>
                <Text style={{ fontSize: 18 }}>No News</Text>
            </View>
        );
    };

    renderCardItem({ item, index }) {
        return (
            <View style={{
                width: 300,
                padding: 10,
                borderColor: 'grey',
                borderWidth: 0.3,
            }} >
                <Image source={{ uri: item.urlToImage }} style={{ width: 280, height: 200 }} />
                <View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }} numberOfLines={2}>{item.title}</Text>
                    <Text>{moment(item.publishedAt).calendar()}</Text>
                </View>
            </View>
        )
    }

    renderNewsList = () => {
        const { headlinesCarousel } = this.props;

        return (
            <FlatList
                data={headlinesCarousel}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.list}
                renderItem={this.renderCardItem}
                keyExtractor={(item, index) => `${index}`}
                ItemSeparatorComponent={() => <View style={{ width: 10 }}></View>}
            />
        );
    };

    render() {
        const { headlinesCarousel } = this.props;
        return headlinesCarousel.length === 0 ? this.renderLoading() : this.renderNewsList();
    }
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
    }
});

export default TopHeadlines;
