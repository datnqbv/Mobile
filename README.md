Phùng Tiến Đạt-22810310228

1,Hiệu năng:
  FlatList:
  
Tối ưu hóa tốt hơn cho danh sách đơn giản và dài, nhờ cơ chế "windowing" (chỉ render những mục cần thiết cho màn hình hiện tại).
Thích hợp cho các danh sách dài vì nó quản lý hiệu quả bộ nhớ bằng cách chỉ render các mục nhìn thấy được.
  SectionList:
  
Có thể có hiệu năng thấp hơn một chút so với FlatList khi xử lý danh sách phức tạp hoặc dài vì phải quản lý thêm cấu trúc nhóm.
Tuy nhiên, vẫn được tối ưu hóa tốt và có thể xử lý danh sách lớn với các nhóm.
2, Tính dễ sử dụng:
  FlatList:
  
Dễ sử dụng cho các danh sách đơn giản, chỉ cần cấu hình mảng dữ liệu và hàm render.
Cấu hình ít hơn, thích hợp cho người mới bắt đầu hoặc danh sách không phân nhóm.
  SectionList:
  
Phức tạp hơn do cần cấu hình thêm phần nhóm dữ liệu và tiêu đề nhóm.
Yêu cầu phải hiểu thêm về cấu trúc dữ liệu phân nhóm, nhưng lại rất hữu ích khi cần hiển thị dữ liệu có cấu trúc rõ ràng và phân loại.

Ảnh demo:
![image](https://github.com/user-attachments/assets/03f5907e-e23f-41e7-a6fe-329763bb23dd)
