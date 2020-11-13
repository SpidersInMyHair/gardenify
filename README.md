# COMP/SENG4920 Group Project: Gardenify
Amir Harambasic, Rishad Mahbub, Nathan Ellis, Mohamed Al Mouiee, Forrest Koch

## Contents
- [Project Planning](planning/planning.md)
- [Backend](_backend/backend.md)
- [Frontend](_frontend/frontend.md)
- [Data](_backend/plant_service/data/data.md)

## Requirements
- npm >= 6.14.8
- yarn >= 1.22.10
- python3 >= 3.8.6
- mysql >= 8.0.0

## Getting Started

From the root directory, install the dependencies:
```bash
yarn
```

Then, install and setup MySQL locally:

1. Ensure you have mysql 8.0 installed. Run
```bash
mysql
```
and ensure that it is installed.

2. Start the mysql service on your local machine.

3. Login to the root user on mysql on your local machine.
```bash
mysql -u root -p
```
You will be prompted for the root password. 

4. Create the mysql account that will be used in this project.
```bash
CREATE USER 'gardenify'@'localhost' IDENTIFIED BY 'h5a!uEkaKD69A92%rrEdbD';
GRANT ALL PRIVILEGES ON *.* TO 'gardenify'@'localhost';
ALTER USER 'gardenify'@'localhost' IDENTIFIED WITH mysql_native_password BY 'h5a!uEkaKD69A92%rrEdbD';
FLUSH PRIVILEGES;
```

5. Exit the MySQL command line interface.
```bash
exit
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the frontend pages and components inside the `/_frontend` folder. These edits are automatically re-rendered.
You can start editing the backend endpoints inside the `/_backend` folder. These edits are *not* automatically re-built. The server must be rebuilt first.

Protogen can also be used. A protogen script exists in ./bin. You 
should provide a input file for the protogen generation.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
