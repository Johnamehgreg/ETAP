import {
    View,
    Text,
    Dimensions,
    ActivityIndicator,
    FlatList,
    Modal,
    Image,
    Animated,
    TouchableOpacity
} from 'react-native'
import styles from './instaStoryStyle';
import Scale, { verticalScale } from '../../constants/Scale'
import React, { useState, useRef, useCallback, useEffect } from 'react'
import { useDispatch, useSelector, } from 'react-redux'
const { height, width } = Dimensions.get('window');



const InstaStory = (props: { showStory: boolean, handleShowStory: (value: boolean) => void }) => {
    const [index, setindex] = useState<number>(0)
    const indexRef = useRef(index);
    indexRef.current = index;
    const ref = useRef<FlatList>(null)

    const stories = useSelector((state: any) => state.productList.data)



    useEffect(() => {
        ref.current?.scrollToIndex({
            animated: true,
            index
        })

    }, [index])



    return (
        <>

            <Modal
                animationType="fade"
                transparent={false}
                visible={props.showStory}
                onRequestClose={() => {
                    props.handleShowStory(false)
                }}
            >
                <View
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#000'

                    }}
                >

                    <Indicator

                        data={stories}
                        setindex={setindex}
                        index={index} />


                    <FlatList
                        // onScroll={onScroll}
                        onMomentumScrollEnd={(event) => {
                            const index = Math.floor(event.nativeEvent.contentOffset.x / width)
                            setindex(index)
                        }}
                        ref={ref}
                        initialScrollIndex={index}
                        data={stories}
                        horizontal
                        keyExtractor={(item: any) => item.id}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        bounces
                        renderItem={({ item, index: fl_index }) =>
                            <RenderStoryCarousel
                                index={index}
                                setindex={setindex}
                                setshowStory={props.handleShowStory}
                                item={item}

                                fl_index={fl_index}
                                listLength={stories.length} />}
                    />

                </View>


            </Modal>
        </>
    )
}

export default InstaStory


interface RenderStoryCarouselProps {
    item: any,
    fl_index: number,
    setindex:any,
    index: number,
    listLength: number,
    setshowStory: (value: boolean) => void,
}


const RenderStoryCarousel: React.FC<RenderStoryCarouselProps> = ({ item, setshowStory, fl_index, index, setindex, listLength,  }) => {
    const [isLoader, setisLoader] = useState(true)
    const [time, setTime] = React.useState(0);
    const [maxCount, setmaxCount] = useState(10)
    const timerRef = React.useRef(time);




    const next = () => {
        if (index === listLength - 1) {
            setshowStory(false);
            setindex(0)
        } else {
            setindex(index + 1)
        }


    }

    const previous = () => {
        if (index === 0) {
            return;
        }

        setindex(index - 1)
    }


    const startTIme = () => {
        setTimeout(() => {
            next()
        }, 10000)

    }


    const Loader = () => {
        if (isLoader) return (
            <>
                {
                    fl_index === index && (
                        <View
                            style={styles.loaderContainer}
                        >
                            <ActivityIndicator size={60} color='white' />
                        </View>
                    )
                }

            </>
        )
    }

    const currentItem = () => {
        if (fl_index === index) return true

        return false
    }
    useEffect(() => {


        // onPlayerProgress(maxCount, time)
    }, [index,])



    return (
        <View
            style={{
                width: width,
                height,
                position: 'relative',
                backgroundColor: 'black',
            }}>

            {Loader()}
            <Image
                progressiveRenderingEnabled={true}
                source={{ uri: item.image }}
                onLoad={() => {
                    // startTIme()
                    setisLoader(false)
                }}
                style={{
                    flex: 1,
                    resizeMode: 'contain'
                }}
            />
        </View>
    )

}


interface IndicatorProps {
    data: any,
    setindex: any,
    index: number


}

const Indicator: React.FC<IndicatorProps> = ({ data, setindex, index }) => {

    const afterIndex = (i: any) => {
        if (index > i || index === i) return true
    }
  
    const next = () => {
        if (index === data.length - 1) {
            return;
        } else {
            setindex(index + 1)
        }


    }


    const checkProgress = (item: any, ListIndex: number) => {

        if (index === ListIndex) {
            return 100
        } else {
            return 100
        }

    }


    return (
        <View
            style={{
                position: 'absolute',
                top: 30,
                zIndex: 100,
                width
            }}
        >


            <View
                style={{
                    justifyContent: 'space-evenly',
                    flexDirection: 'row',
                    paddingHorizontal: Scale(5)
                }}
            >
                {
                    data.map((item: any, i: any) => {


                        return (
                            <TouchableOpacity
                            key={item.id}
                                onPress={() => {
                                    setindex(i)
                                }}

                                style={{
                                    width: `${100 / data.length}%`,
                                    height: Scale(2),
                                    borderRadius: Scale(5),
                                    backgroundColor: "gray",
                                    marginHorizontal: Scale(10)
                                }}
                            >
                                <Animated.View
                                    style={{
                                        height: Scale(2),
                                        borderRadius: Scale(5),
                                        width: `${checkProgress(item, i)}%`,
                                        backgroundColor: afterIndex(i) ? "white" : "gray",
                                    }}
                                >

                                </Animated.View>
                            </TouchableOpacity>


                        )
                    })
                }
            </View>



        </View>
    )
}
