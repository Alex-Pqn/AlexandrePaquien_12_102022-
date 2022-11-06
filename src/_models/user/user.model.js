class UserModel {
  constructor(data) {
    this.id = data.id;
    this.userInfos = {
      firstName: data.userInfos.firstName,
      lastName: data.userInfos.lastName,
      age: data.userInfos.age,
    };
    this.todayScore = data.todayScore;
    this.keyData = {
      calorieCount: data.keyData.calorieCount,
      proteinCount: data.keyData.proteinCount,
      carbohydrateCount: data.keyData.carbohydrateCount,
      lipidCount: data.keyData.lipidCount,
    };
  }
}

export default UserModel;