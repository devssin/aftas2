export interface User {
  id: 0;
  fullName: '';
  dateOfBirth: Date | null;
  adress: '';
  email: '';
  password: '';
  role: '' | 'Adherent' | 'Manager' | 'Jury';
  accessionDate: '';
  nationality: String | '';
  identityDocument: 'CIN' | '';
  identityNumber: String | '';
}
