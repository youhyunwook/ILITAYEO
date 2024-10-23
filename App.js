import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';

const MainPage = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        {/* 상단 검색창과 아이콘들 */}
        <View style={styles.header}>
          <View style={styles.leftIcons}>
            <Image
              source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/settings.png' }} // 앱 아이콘 이미지
              style={styles.appIcon}
            />
          </View>
          <View style={styles.rightIcons}>
            <TouchableOpacity>
              <Image
                source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/bell.png' }} // 알림 아이콘
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/settings.png' }} // 설정 아이콘
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          {/* 검색 바*/}
          <View style={styles.searchBar}>
            <TextInput
              style={styles.searchInput}
              placeholder="검색어를 입력해주세요"
              placeholderTextColor="#888"
            />
          </View>
        </View>

        <View style={styles.iconGrid}>
          <IconItem label="비행기" iconUri="https://img.icons8.com/ios-filled/50/000000/airplane.png" />
          <IconItem label="숙소" iconUri="https://img.icons8.com/ios-filled/50/000000/hotel.png" />
          <IconItem label="교통" iconUri="https://img.icons8.com/ios-filled/50/000000/bus.png" />
          <IconItem label="날씨" iconUri="https://img.icons8.com/ios-filled/50/000000/weather.png" />
          <IconItem label="왓올" iconUri="https://img.icons8.com/ios-filled/50/000000/sightseeing.png" />
          <IconItem label="핫플레이스" iconUri="https://img.icons8.com/ios-filled/50/000000/hot-spot.png" />
          <IconItem label="렌트" iconUri="https://img.icons8.com/ios-filled/50/000000/car-rental.png" />
          <IconItem label="커뮤니티" iconUri="https://img.icons8.com/ios-filled/50/000000/community.png" />
          <IconItem label="여행가이드" iconUri="https://img.icons8.com/ios-filled/50/000000/guide.png" />
          <IconItem label="지도" iconUri="https://img.icons8.com/ios-filled/50/000000/map.png" />
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/guide.png' }} // 카드 이미지
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>MBTI 성향별로 태국 방문 추천 받아봐요</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.mbtiScroll}>
            {['ISTJ', 'ISFJ', 'INFJ', 'INTJ', 'ISTP', 'ISFP', 'INFP', 'INTP', 'ESTP', 'ESFP', 'ENFP', 'ENTP', 'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ'].map((mbti, index) => (
              <TouchableOpacity key={index} style={styles.mbtiButton}>
                <Text style={styles.mbtiText}>{mbti}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/* 푸터바 */}
      <View style={styles.bottomNav}>
        <NavButton label="메인" iconUri="https://img.icons8.com/ios-filled/50/000000/home.png" />
        <NavButton label="찜" iconUri="https://img.icons8.com/ios-filled/50/000000/like.png" />
        <NavButton label="헬스" iconUri="https://img.icons8.com/ios-filled/50/000000/health.png" />
        <NavButton label="게시" iconUri="https://img.icons8.com/ios-filled/50/000000/post.png" />
        <NavButton label="페이지" iconUri="https://img.icons8.com/ios-filled/50/000000/user.png" />
      </View>
    </View>
  );
};

const NavButton = ({ label, iconUri }) => (
  <TouchableOpacity style={styles.navButton}>
    <Image source={{ uri: iconUri }} style={styles.navIcon} />
    <Text>{label}</Text>
  </TouchableOpacity>
);

const IconItem = ({ label, iconUri }) => (
  <TouchableOpacity style={styles.iconContainer}>
    <Image source={{ uri: iconUri }} style={styles.iconImage} />
    <Text style={styles.iconLabel}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#003366',
  },
  leftIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end', // 오른쪽 정렬
  },
  searchBar: {
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginTop: 10, // 아이콘과 검색바 간격
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  appIcon: {
    width: 30,
    height: 30,
  },
  icon: {
    width: 25, // 아이콘 크기
    height: 25,
    marginLeft: 10, // 아이콘 간격
  },
  iconGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 20,
  },
  iconContainer: {
    alignItems: 'center',
    width: '18%',
    marginBottom: 20, // 각 아이콘 항목 간격
  },
  iconImage: {
    width: 30,
    height: 30,
    marginBottom: 5, // 아이콘과 레이블 간격
  },
  iconLabel: {
    fontSize: 12,
    color: '#000',
  },
  card: {
    padding: 20,
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  mbtiScroll: {
    marginTop: 10,
  },
  mbtiButton: {
    backgroundColor: '#eee',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  mbtiText: {
    fontSize: 14,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navButton: {
    alignItems: 'center',
  },
  navIcon: {
    width: 30, // 아이콘 너비
    height: 30, // 아이콘 높이
    marginBottom: 5, // 아이콘과 라벨 간격
  },
});

export default MainPage;
