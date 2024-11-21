import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Users = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([
    // {
    //   id: 1,
    //   name: "Leanne Graham",
    //   username: "Bret",
    //   email: "Sincere@april.biz",
    //   address: {
    //     street: "Kulas Light",
    //     suite: "Apt. 556",
    //     city: "Gwenborough",
    //     zipcode: "92998-3874",
    //     geo: {
    //       lat: "-37.3159",
    //       lng: "81.1496",
    //     },
    //   },
    //   phone: "1-770-736-8031 x56442",
    //   website: "hildegard.org",
    //   company: {
    //     name: "Romaguera-Crona",
    //     catchPhrase: "Multi-layered client-server neural-net",
    //     bs: "harness real-time e-markets",
    //   },
    // },
    // {
    //   id: 2,
    //   name: "Ervin Howell",
    //   username: "Antonette",
    //   email: "Shanna@melissa.tv",
    //   address: {
    //     street: "Victor Plains",
    //     suite: "Suite 879",
    //     city: "Wisokyburgh",
    //     zipcode: "90566-7771",
    //     geo: {
    //       lat: "-43.9509",
    //       lng: "-34.4618",
    //     },
    //   },
    //   phone: "010-692-6593 x09125",
    //   website: "anastasia.net",
    //   company: {
    //     name: "Deckow-Crist",
    //     catchPhrase: "Proactive didactic contingency",
    //     bs: "synergize scalable supply-chains",
    //   },
    // },
    // {
    //   id: 3,
    //   name: "Clementine Bauch",
    //   username: "Samantha",
    //   email: "Nathan@yesenia.net",
    //   address: {
    //     street: "Douglas Extension",
    //     suite: "Suite 847",
    //     city: "McKenziehaven",
    //     zipcode: "59590-4157",
    //     geo: {
    //       lat: "-68.6102",
    //       lng: "-47.0653",
    //     },
    //   },
    //   phone: "1-463-123-4447",
    //   website: "ramiro.info",
    //   company: {
    //     name: "Romaguera-Jacobson",
    //     catchPhrase: "Face to face bifurcated interface",
    //     bs: "e-enable strategic applications",
    //   },
    // },
    // {
    //   id: 4,
    //   name: "Patricia Lebsack",
    //   username: "Karianne",
    //   email: "Julianne.OConner@kory.org",
    //   address: {
    //     street: "Hoeger Mall",
    //     suite: "Apt. 692",
    //     city: "South Elvis",
    //     zipcode: "53919-4257",
    //     geo: {
    //       lat: "29.4572",
    //       lng: "-164.2990",
    //     },
    //   },
    //   phone: "493-170-9623 x156",
    //   website: "kale.biz",
    //   company: {
    //     name: "Robel-Corkery",
    //     catchPhrase: "Multi-tiered zero tolerance productivity",
    //     bs: "transition cutting-edge web services",
    //   },
    // },
    // {
    //   id: 5,
    //   name: "Chelsey Dietrich",
    //   username: "Kamren",
    //   email: "Lucio_Hettinger@annie.ca",
    //   address: {
    //     street: "Skiles Walks",
    //     suite: "Suite 351",
    //     city: "Roscoeview",
    //     zipcode: "33263",
    //     geo: {
    //       lat: "-31.8129",
    //       lng: "62.5342",
    //     },
    //   },
    //   phone: "(254)954-1289",
    //   website: "demarco.info",
    //   company: {
    //     name: "Keebler LLC",
    //     catchPhrase: "User-centric fault-tolerant solution",
    //     bs: "revolutionize end-to-end systems",
    //   },
    // },
    // {
    //   id: 6,
    //   name: "Mrs. Dennis Schulist",
    //   username: "Leopoldo_Corkery",
    //   email: "Karley_Dach@jasper.info",
    //   address: {
    //     street: "Norberto Crossing",
    //     suite: "Apt. 950",
    //     city: "South Christy",
    //     zipcode: "23505-1337",
    //     geo: {
    //       lat: "-71.4197",
    //       lng: "71.7478",
    //     },
    //   },
    //   phone: "1-477-935-8478 x6430",
    //   website: "ola.org",
    //   company: {
    //     name: "Considine-Lockman",
    //     catchPhrase: "Synchronised bottom-line interface",
    //     bs: "e-enable innovative applications",
    //   },
    // },
    // {
    //   id: 7,
    //   name: "Kurtis Weissnat",
    //   username: "Elwyn.Skiles",
    //   email: "Telly.Hoeger@billy.biz",
    //   address: {
    //     street: "Rex Trail",
    //     suite: "Suite 280",
    //     city: "Howemouth",
    //     zipcode: "58804-1099",
    //     geo: {
    //       lat: "24.8918",
    //       lng: "21.8984",
    //     },
    //   },
    //   phone: "210.067.6132",
    //   website: "elvis.io",
    //   company: {
    //     name: "Johns Group",
    //     catchPhrase: "Configurable multimedia task-force",
    //     bs: "generate enterprise e-tailers",
    //   },
    // },
    // {
    //   id: 8,
    //   name: "Nicholas Runolfsdottir V",
    //   username: "Maxime_Nienow",
    //   email: "Sherwood@rosamond.me",
    //   address: {
    //     street: "Ellsworth Summit",
    //     suite: "Suite 729",
    //     city: "Aliyaview",
    //     zipcode: "45169",
    //     geo: {
    //       lat: "-14.3990",
    //       lng: "-120.7677",
    //     },
    //   },
    //   phone: "586.493.6943 x140",
    //   website: "jacynthe.com",
    //   company: {
    //     name: "Abernathy Group",
    //     catchPhrase: "Implemented secondary concept",
    //     bs: "e-enable extensible e-tailers",
    //   },
    // },
    // {
    //   id: 9,
    //   name: "Glenna Reichert",
    //   username: "Delphine",
    //   email: "Chaim_McDermott@dana.io",
    //   address: {
    //     street: "Dayna Park",
    //     suite: "Suite 449",
    //     city: "Bartholomebury",
    //     zipcode: "76495-3109",
    //     geo: {
    //       lat: "24.6463",
    //       lng: "-168.8889",
    //     },
    //   },
    //   phone: "(775)976-6794 x41206",
    //   website: "conrad.com",
    //   company: {
    //     name: "Yost and Sons",
    //     catchPhrase: "Switchable contextually-based project",
    //     bs: "aggregate real-time technologies",
    //   },
    // },
    // {
    //   id: 10,
    //   name: "Clementina DuBuque",
    //   username: "Moriah.Stanton",
    //   email: "Rey.Padberg@karina.biz",
    //   address: {
    //     street: "Kattie Turnpike",
    //     suite: "Suite 198",
    //     city: "Lebsackbury",
    //     zipcode: "31428-2261",
    //     geo: {
    //       lat: "-38.2386",
    //       lng: "57.2232",
    //     },
    //   },
    //   phone: "024-648-3804",
    //   website: "ambrose.net",
    //   company: {
    //     name: "Hoeger LLC",
    //     catchPhrase: "Centralized empowering task-force",
    //     bs: "target end-to-end models",
    //   },
    // },
  ]);
  useEffect(() => {
    const getUsers = async () => {
      setIsLoading(true);
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const rep = await data.json();
        setUsers(rep);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    getUsers();
  }, []);
  const params = useParams();
  if (isLoading) {
    return <div className="text-white text-2xl">Loading ...</div>;
  }

  return (
    <main className="flex gap-4">
      <aside className="w-80 bg-slate-500 rounded-md">
        <ul className="">
          {users.map((user) => {
            return (
              <li
                key={user.id}
                className={`${
                  user.id == params.id ? "text-blue-200 font-bold" : ""
                } text-slate-50 p-2 rounded-md m-2`}
              >
                <Link to={`/profiles/${user.id}`}>{user.name}</Link>
              </li>
            );
          })}
        </ul>
      </aside>
      <section className="bg-slate-700 flex-1 rounded-md ">
        {users.length > 0 && (
          <div className="w-3/4 mx-auto bg-white shadow-md rounded-lg p-6 mt-8">
            <h2 className="text-2xl font-bold text-gray-800">
              {users[+params.id - 1].name} ({users[+params.id - 1].username})
            </h2>
            <p className="text-gray-600">
              📧 Email:{" "}
              <a
                href={`mailto:${users[+params.id - 1].email}`}
                className="text-blue-500 underline"
              >
                {users[+params.id - 1].email}
              </a>
            </p>
            <div className="text-gray-600">
              <h3 className="font-semibold text-lg">Address 🏠:</h3>
              <p>
                {users[+params.id - 1].address.street},{" "}
                {users[+params.id - 1].address.suite}
              </p>
              <p>
                {users[+params.id - 1].address.city},{" "}
                {users[+params.id - 1].address.zipcode}
              </p>
              <p>
                🌍 Coordinates: {users[+params.id - 1].address.geo.lat},{" "}
                {users[+params.id - 1].address.geo.lng}
              </p>
            </div>
            <p className="text-gray-600">
              📞 Phone: {users[+params.id - 1].phone}
            </p>
            <p className="text-gray-600">
              🌐 Website:{" "}
              <a
                href={`http://${users[+params.id - 1].website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                {users[+params.id - 1].website}
              </a>
            </p>
            <div className="text-gray-600">
              <h3 className="font-semibold text-lg">Company 🏢:</h3>
              <p>{users[+params.id - 1].company.name}</p>
              <p>
                <i>{users[+params.id - 1].company.catchPhrase}</i>
              </p>
              <p>📈 {users[+params.id - 1].company.bs}</p>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Users;
