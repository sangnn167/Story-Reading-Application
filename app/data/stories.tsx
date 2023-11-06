const storiesData = [
  {
    id: 1,
    title: "Tấm cám",
    description: "Câu chuyện tấm cám kể lại cuộc đời và số phận của tấm, một cô gái hiền lành, xinh đẹp, mồ côi, sống với dì ghẻ và cô em cùng cha khác mẹ tên là cám.Tấm bị ngược đãi",
    datePosted: "2023-11-02",
    author: "Nam",
    status: "[Đang cập nhật]",
    category: "Ma",
    favourite: true,
    chapters: [
      {
        chapterNumber: 1,
        chapterTitle: "Tấm cám phần 1",
        chapterDescription: "Ngày xưa, có Tấm và Cám là hai chị em cùng cha khác mẹ. Hai chị em gần bằng tuổi nhau. Tấm là con vợ cả. Cám là con vợ lẽ.",
        chapterDatePosted: "1 giờ trước",
      },
      {
        chapterNumber: 2,
        chapterTitle: "Tấm cám phần 2",
        chapterDescription: "Mẹ Tấm đã chết từ hồi Tấm còn bé. Sau đó mấy năm thì cha Tấm cũng chết.",
        chapterDatePosted: "2 ngày trước",
      },
      {
        chapterNumber: 3,
        chapterTitle: "Tấm cám phần 3",
        chapterDescription: "Tấm ở với dì ghẻ và đó là người rất cay nghiệt. Ngày qua ngày, Tấm phải làm lụng luôn canh, hết chăn trâu, gánh nước, đến thái khoai, vớt bèo,",
        chapterDatePosted: "1 tháng trước",
      },
      {
        chapterNumber: 4,
        chapterTitle: "Tấm cám phần 4",
        chapterDescription: "Hễ đứa nào bắt được đầy giỏ thì thưởng cho một cái yếm đỏ",
        chapterDatePosted: "1 nằm trước",
      },
      {
        chapterNumber: 5,
        chapterTitle: "Tấm cám phần 5",
        chapterDescription: "Thấy Tấm bắt được một giỏ đầy, Cám bảo chị :",
        chapterDatePosted: "1 năm trước",
      },
    ],
  },
  {
    id: 2,
    title: "Cây khế",
    description: "Câu truyện nói về cây khế",
    datePosted: "2023-11-02",
    author: "Sang",
    category: "Ma",
    status: "[Đang cập nhật]",
    favourite: false,
    chapters: [
      {
        chapterNumber: 1,
        chapterTitle: "Cây khế phần 1",
        chapterDescription: "Ở nhà nọ có 2 anh em sớm mồ côi cha mẹ. Người anh chia gia tài, người em chỉ được cây khế.",
        chapterDatePosted: "1 giờ trước",
      },
    ],
  },
  {
    id: 3,
    title: "Chú Cuội",
    description: "Mô tả cho truyện 3",
    datePosted: "2023-11-02",
    author: "Sang",
    category: "Ma",
    status: "[Đang cập nhật]",
    favourite: false,
    chapters: [
      {
        chapterNumber: 1,
        chapterTitle: "Chapter 1",
        chapterDescription: "Nội dung của truyện 3",
        chapterDatePosted: "2 giờ trước",
      },
    ],
  },
  {
    id: 4,
    category: "Ma",
    title: "Dã Tràng",
    description: "Mô tả cho truyện 4",
    datePosted: "2023-11-02",
    author: "Nam",
    status: "[Đang cập nhật]",
    favourite: true,
    chapters: [
      {
        chapterNumber: 1,
        chapterTitle: "Cây khế phần 1",
        chapterDescription: "Ở nhà nọ có 2 anh em sớm mồ côi cha mẹ. Người anh chia gia tài, người em chỉ được cây khế.",
        chapterDatePosted: "1 giờ trước",
      },
    ],
  },
  {
    id: 5,
    title: "Tình Cảm",
    description: "Mô tả cho truyện 5",
    datePosted: "2023-11-02",
    author: "Nam",
    category: "Giaitri",
    status: "[Đang cập nhật]",
    favourite: false,
    chapters: [
      {
        chapterNumber: 1,
        chapterTitle: "Cây khế phần 1",
        chapterDescription: "Ở nhà nọ có 2 anh em sớm mồ côi cha mẹ. Người anh chia gia tài, người em chỉ được cây khế.",
        chapterDatePosted: "1 giờ trước",
      },
    ],
  },
  {
    id: 6,
    title: "Truy tìm",
    description: "Mô tả cho truyện 6",
    datePosted: "2023-11-02",
    author: "Sang",
    category: "Giaitri",
    status: "[Đang cập nhật]",
    favourite: false,
    chapters: [
      {
        chapterNumber: 1,
        chapterTitle: "Cây khế phần 1",
        chapterDescription: "Ở nhà nọ có 2 anh em sớm mồ côi cha mẹ. Người anh chia gia tài, người em chỉ được cây khế.",
        chapterDatePosted: "1 giờ trước",
      },
    ],
  },
  {
    id: 7,
    title: "Chạy trốn",
    description: "Mô tả cho truyện 7",
    datePosted: "2023-11-02",
    author: "Linh",
    category: "Giaitri",
    status: "[Đang cập nhật]",
    favourite: true,
    chapters: [
      {
        chapterNumber: 1,
        chapterTitle: "Cây khế phần 1",
        chapterDescription: "Ở nhà nọ có 2 anh em sớm mồ côi cha mẹ. Người anh chia gia tài, người em chỉ được cây khế.",
        chapterDatePosted: "1 giờ trước",
      },
    ],
  },
  {
    id: 8,
    title: "Hành động",
    description: "Mô tả cho truyện 8",
    datePosted: "2023-11-02",
    author: "Yến",
    category: "Giaitri",
    status: "[Đang cập nhật]",
    favourite: false,
    chapters: [
      {
        chapterNumber: 1,
        chapterTitle: "Cây khế phần 1",
        chapterDescription: "Ở nhà nọ có 2 anh em sớm mồ côi cha mẹ. Người anh chia gia tài, người em chỉ được cây khế.",
        chapterDatePosted: "1 giờ trước",
      },
    ],
  },
];

export default storiesData;
