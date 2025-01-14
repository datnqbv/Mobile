Phùng Tiến Đạt-22810310228

So sánh FlatList và SectionList

Mục đích sử dụng
FlatList: Hiển thị danh sách các mục đơn giản, không cần nhóm. Thích hợp với danh sách liên tục, chẳng hạn như danh sách sản phẩm, người dùng, bài viết.

SectionList: Hiển thị danh sách phân nhóm với tiêu đề (header) cho từng nhóm. Phù hợp khi bạn cần tổ chức dữ liệu thành các phần, như danh sách danh mục, thời gian biểu, hoặc lịch trình.

Cấu trúc dữ liệu
FlatList: Dữ liệu là một mảng các đối tượng.

SectionList: Dữ liệu là một mảng các đối tượng, trong đó mỗi đối tượng chứa: title: Tiêu đề của nhóm. data: Một mảng các mục trong nhóm.

Hiệu năng
FlatList: Tối ưu hóa tốt cho danh sách lớn bằng cách render từng phần tử khi cần thiết. Cung cấp tính năng như lazy loading (hiển thị một phần danh sách) để giảm tải tài nguyên.

SectionList: Hiệu năng tương tự FlatList cho danh sách lớn. Khi làm việc với dữ liệu phân nhóm lớn, SectionList có thể cần xử lý thêm phần render các tiêu đề, làm tăng chi phí tính toán.

Tính dễ sử dụng
FlatList: Dễ thiết lập hơn, vì chỉ cần truyền một mảng và các phương thức cơ bản (renderItem, keyExtractor). Giao diện rõ ràng, ít phức tạp.
SectionList: Yêu cầu cấu trúc dữ liệu phức tạp hơn (phải nhóm dữ liệu). Cần định nghĩa thêm các phương thức như renderSectionHeader để hiển thị tiêu đề nhóm. Dễ bị nhầm lẫn khi cấu trúc dữ liệu không đúng.

ảnh demo:
![image](https://github.com/user-attachments/assets/98349a45-7142-4599-ac35-674c9cccf3be)



