<template>
  <div class="service-reception">
    <div>
      <div class="tabs">
        <div class="tabsleft">
          <div class="tab" @click="selectedTab = 'residents'">Проживающие</div>
          <div class="tab" @click="selectedTab = 'check-in'">Заезжающие</div>
          <div class="tab" @click="selectedTab = 'check-out'">Выезжающие</div>
          <div class="tab" @click="selectedTab = 'bookings'">Брони</div>
        </div>
        <div class="add">
          <button class="add-btn">Разместить</button>
        </div>
      </div>
      <div class="searchposition">
        <div class="search-bar">
          <input
            type="text"
            placeholder="Введите имя гостя/номер брони/номер комнаты"
            v-model="searchQuery"
          />
        </div>
        <div>
          <div class="actions">
            <button @click="exportData">Экспорт</button>
            <button @click="printData">Распечатать</button>
            <button @click="evictGuests">Выселить</button>
          </div>
        </div>
      </div>
      <div v-show="selectedTab === 'residents'"></div>

      <div v-show="selectedTab === 'check-in'"></div>

      <div v-show="selectedTab === 'check-out'"></div>

      <div v-show="selectedTab === 'bookings'"></div>
    </div>
    <div class="viewandsort">
      <div class="view-tab">
        <span>Вид</span>
        <span class="view">&#9660;</span>
      </div>
      <div class="sort-tab" @click="toggleSortVisibility">
        <span>{{ currentSort }}</span>
        <span class="sort" v-if="isSortVisible">▲</span>
        <span class="sort" v-else>&#9660;</span>
      </div>
    </div>

    <div v-show="isSortVisible" class="sort-buttons">
      <button
        @click="sortBy('fullNameAZ')"
        :class="{ activeSort: currentSort === 'Сортировка: По ФИО A-Z' }"
      >
        Сортировка по ФИО A-Z
      </button>
      <button
        @click="sortBy('fullNameZA')"
        :class="{ activeSort: currentSort === 'Сортировка: По ФИО Z-A' }"
      >
        Сортировка по ФИО Z-A
      </button>
      <button
        @click="sortBy('countryAZ')"
        :class="{ activeSort: currentSort === 'Сортировка: По странам A-Z' }"
      >
        Сортировка по странам A-Z
      </button>
      <button
        @click="sortBy('countryZA')"
        :class="{ activeSort: currentSort === 'Сортировка: по странам Z-A' }"
      >
        Сортировка по странам Z-A
      </button>
      <button
        @click="sortBy('checkInDate')"
        :class="{ activeSort: currentSort === 'Сортировка: По дате заезда' }"
      >
        Сортировка по дате заезда
      </button>
      <button
        @click="sortBy('checkOutDate')"
        :class="{ activeSort: currentSort === 'Сортировка: По дате выезда' }"
      >
        Сортировка по дате выезда
      </button>
    </div>

    <div class="resident-info">
      <div
        class="resident-item"
        v-for="resident in sortedResidents"
        :key="resident.id"
      >
        <div class="vip">
          <div class="empty-div"></div>
          <div class="right-div">
            <span v-if="resident.isVIP" class="vip-icon">VIP</span>
            <div class="icons">
              <img src="../assets/icons/Component 14.svg" alt="icon" />
              <img src="../assets/icons/Component 13.svg" alt="icon" />
              <img src="../assets/icons/Component 12.svg" alt="icon" />
            </div>
          </div>
        </div>

        <div class="registry">
          <ul class="main-detail">
            <li class="boldfullname">
              {{ resident.fullName }}
            </li>
            <li class="standard">
              Стандартный одноместный номер № {{ resident.roomNumber }}
            </li>
          </ul>
        </div>
        <div class="thirdrow">
          <ul>
            <li>Регистрационный номер</li>
            <li>Гражданство</li>
            <li>Заезд</li>
            <li>Выезд</li>
            <li>Сумма к оплате</li>
            <li>Статус оплаты</li>
          </ul>
        </div>
        <div class="otherItems">
          <ul>
            <li>
              <a :href="'/'">{{ resident.registrationNumber }}</a>
            </li>
            <li>{{ resident.citizenship }}</li>
            <li>{{ resident.checkInDate }}</li>
            <li>{{ resident.checkOutDate }}</li>
            <li>{{ resident.amountToBePaid }}</li>
            <li>{{ resident.amountStatus }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      residents: [
        {
          id: 1,
          fullName: "THOMAS FRANKLIN MCDONALD",
          roomNumber: "211",
          registrationNumber: "123456-9999-2021",
          citizenship: "UNITED STATES OF AMERICA",
          checkInDate: "06.01.2024 12:45",
          checkOutDate: "22.04.2024 14:01",
          amountToBePaid: "12 345 670,00 UZS",
          amountStatus: "Не оплачено",
          isVIP: true,
        },
        {
          id: 2,
          fullName: "ALEKSANDROV ALEKSANDR ALEKSANDROVICH",
          roomNumber: "208",
          registrationNumber: "123456-9999-2021",
          citizenship: "RUSSIAN FEDERATION",
          checkInDate: "06.01.2024 12:45",
          checkOutDate: "22.04.2024 14:01",
          amountToBePaid: "12 345 670,00 UZS",
          amountStatus: "Не оплачено",
        },
        {
          id: 3,
          fullName: "IVANOV IVAN IVANOVICH",
          roomNumber: "208",
          registrationNumber: "123456-9999-2021",
          citizenship: "RUSSIAN FEDERATION",
          checkInDate: "06.01.2024 12:45",
          checkOutDate: "21.04.2024 14:01",
          amountToBePaid: "12 345 670,00 UZS",
          amountStatus: "Не оплачено",
          isVIP: true,
        },
        {
          id: 4,
          fullName: "ADAMA SALEMBERE DASUNA",
          roomNumber: "212",
          registrationNumber: "123456-9999-2021",
          citizenship: "BRUNEI-DARUSSALAM",
          checkInDate: "06.01.2024 12:45",
          checkOutDate: "22.04.2024 14:01",
          amountToBePaid: "12 345 670,00 UZS",
          amountStatus: "Не оплачено",
        },
      ],
      sortedResidents: [],
      currentSort: "Сортировка",

      isSortVisible: false,
      selectedTab: null,
      searchQuery: "",
    };
  },
  created() {
    this.sortedResidents = [...this.residents];
  },

  methods: {
    toggleSortVisibility() {
      this.isSortVisible = !this.isSortVisible;
    },

    sortBy(criteria) {
      this.currentSort = this.getSortLabel(criteria);
      this.isSortVisible = false;
      if (criteria === "fullNameAZ") {
        this.sortedResidents = this.residents.slice().sort((a, b) => {
          if (a.fullName < b.fullName) return -1;
          if (a.fullName > b.fullName) return 1;
          return 0;
        });
      } else if (criteria === "fullNameZA") {
        this.sortedResidents = this.residents.slice().sort((a, b) => {
          if (a.fullName > b.fullName) return -1;
          if (a.fullName < b.fullName) return 1;
          return 0;
        });
      } else if (criteria === "countryAZ") {
        this.sortedResidents = this.residents.slice().sort((a, b) => {
          if (a.citizenship < b.citizenship) return -1;
          if (a.citizenship > b.citizenship) return 1;
          return 0;
        });
      } else if (criteria === "countryZA") {
        this.sortedResidents = this.residents.slice().sort((a, b) => {
          if (a.citizenship > b.citizenship) return -1;
          if (a.citizenship < b.citizenship) return 1;
          return 0;
        });
      } else if (criteria === "checkInDate") {
        this.sortedResidents = this.residents.slice().sort((a, b) => {
          const dateA = this.parseDate(a.checkInDate);
          const dateB = this.parseDate(b.checkInDate);
          return dateA - dateB;
        });
      } else if (criteria === "checkOutDate") {
        this.sortedResidents = this.residents.slice().sort((a, b) => {
          const dateA = this.parseDate(a.checkOutDate);
          const dateB = this.parseDate(b.checkOutDate);
          return dateA - dateB;
        });
      }
    },

    parseDate(dateString) {
      const [day, month, year, time] = dateString.split(/\.|\s/);
      const [hours, minutes] = time.split(":");
      return new Date(year, month - 1, day, hours, minutes);
    },
    exportData() {
      console.log("Данные были экспортированы");
    },
    printData() {
      console.log("Данные были распечатаны");
    },
    evictGuests() {
      console.log("Гости были выселены");
    },
    getSortLabel(criteria) {
      if (criteria === "fullNameAZ") {
        return "Сортировка: По ФИО A-Z";
      } else if (criteria === "fullNameZA") {
        return "Сортировка: По ФИО Z-A";
      } else if (criteria === "countryAZ") {
        return "Сортировка: По странам A-Z";
      } else if (criteria === "countryZA") {
        return "Сортировка: По странам Z-A";
      } else if (criteria === "checkInDate") {
        return "Сортировка: По дате заезда";
      } else if (criteria === "checkOutDate") {
        return "Сортировка: По дате выезда";
      } else {
        return "Сортировка";
      }
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: "Digital-7 Mono";
  src: url("@/assets/fonts/digital-7 (mono).ttf") format("truetype");
}
@font-face {
  font-family: "SF-Pro-Display-Black";
  src: url("@/assets/fonts/SF-Pro-Display-Black.otf") format("otf");
}

.resident-info {
  margin-bottom: 20px;
}

.resident-item {
  font-family: SF-Pro-Display-Black, sans-serif;
  border: 1px solid #fff;
  margin-bottom: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
}

.tabs {
  display: flex;
  justify-content: space-between;
  padding: 0rem 2rem;
  margin-top: 20px;
  margin-bottom: 10px;
  color: #8f97a3;
  font-family: SF-Pro-Display-Black, sans-serif;
  font-size: 15px;
  border-bottom: 2px solid;
  padding-bottom: 1rem;
}

.tabsleft {
  display: flex;
  justify-content: space-between;
}
.tab {
  padding: 8px 12px;
  cursor: pointer;
}

.tab:hover {
  color: #0066ff;
  border-bottom: 3px #0066ff solid;
}

.add-btn {
  background-color: #0066ff;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
  padding: 10px 25px;
}
.add-btn:hover {
  background-color: #fff;
  color: #0066ff;
  border: 1px #0066ff solid;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
  padding: 10px 25px;
}
.searchposition {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
}
.searchposition .search-bar {
  /* margin-bottom: 20px; */
  /* width: 10rem; */
}

.search-bar {
  width: 70%;
  max-width: 70%;
}

.search-bar input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
}

.actions {
  /* margin-top: 10px; */
}

.actions button {
  margin-left: 10px;
  padding: 8px 16px;
  cursor: pointer;
  background-color: #fff;
  border-radius: 8px;
  border-color: #0066ff;
  color: #0066ff;
}

.viewandsort {
  display: flex;
  justify-content: flex-start;
  font-family: SF-Pro-Display-Black, sans-serif;
  padding: 1rem 2rem;
  font-size: 15px;
}
.view-tab {
  color: #8f97a3;
  margin-right: 10rem;
}
.view-tab .view {
  margin-left: 10px;
}
.sort-buttons {
  position: absolute;
  /* top: 150px; */
  left: 450px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px 15px;
  background-color: #ffffff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

  border-radius: 8px;
}

.sort-buttons button {
  background-color: #ffffff;
  color: #000000;
  border: none;
  padding: 5px 10px;
  margin: 4px 0;
  cursor: pointer;
  transition: background-color 0.1s ease;
}
.sort-buttons button:hover {
  background-color: #3399ff;
  color: #ffffff;
}
.sort-tab {
  cursor: pointer;
  color: #8f97a3;
}
.sort-tab .sort {
  margin-left: 10px;
}

.activeSort {
  background-color: #3399ff;
  color: #ffffff;
}

.sort-buttons button::before {
  content: "";
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
  width: 6px;
  height: 12px;
  border-width: 0 2px 2px 0;
  border-color: transparent #ffffff #ffffff transparent;
  display: none;
  background-color: #3399ff;
}

.activeSort::before {
  display: block;
  position: absolute;
  left: -20px;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  height: 20px;
  border-width: 0 2px 2px 0;
  border-color: transparent #ffffff #ffffff transparent;
  content: "";
}
.main-detail {
  display: flex;
  /* justify-content: space-between; */
}
.registry ul {
  display: flex;
  flex-direction: row;
  list-style: none;
  font-size: 17px;
}
.thirdrow ul {
  color: #8f97a3;
  list-style: none;
  display: flex;
  justify-content: space-between;
}
.boldfullname {
  font-weight: 600;
  color: black;
  width: 40%;
  font-size: 17px;
}

.standard {
  color: #ccc;
  margin-left: 20px;
  align-items: flex-start;
}
.otherItems ul {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  list-style: none;
}
.otherItems {
  margin-top: 30px;
  border-top: #d5d8dd 1px solid;
}

.right-div {
  display: flex;
}
.vip {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.vip-icon {
  text-align: center;
  background-color: #fc3;
  border-radius: 0px 0px 8px 8px;
  color: #ffffff;
  width: 72px;
  height: 24px;
  margin-right: 1rem;
}
</style>
