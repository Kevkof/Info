# Database installation guide

### SQL Server

Voor het testen van de databases gaan we werken met SQL Server 2014 Enterprise met SP1 (Verkrijgbaar via imagine, het vroegere dreamspark) 
[Download Link](https://e5.onthehub.com/WebStore/OfferingDetails.aspx?o=d929da51-e30a-e511-940c-b8ca3a5db7a1&pmv=fdc165eb-08f3-e211-93f2-b8ca3a5db7a1&ws=9382cda9-c42d-e211-aed3-f04da23e67f6&vsro=8) 

#### Installation process: 

1. Mount the iso (just double click in the recent windows versions)
2. New SQL Server Stand-alone installation or add features to an existing installation
3. Everything should be green except for a warning with the firewall (this is not really an issue)
4. Hit `Next`, the product key should already be there
5. Hit `Next`, Just accept the terms and conditions (not like we would ever read them fully)
6. Hit `Next`, SQL Server Feature Installation should already be selected (if not do so yourself, duh !! )
7. Hit `Next`, and check these features (the ones we needed for DBII)
- Database Engine Services
- Data Quality Services
- Analysis Services
- Reporting Services - Native
- Data Quality Client
- Client Tools Connectivity
- Integration Services
- Management Tools - Basic
- Management Tools - Complete
- Master Data Services
8. Hit `Next`, Default instance should already be selected and the instance ID should be `MSSQLSERVER`
9. Hit `Next`
10. Hit `Next`, select Mixed Mode and enter passwords and hit `Add Current User` to add an administator
11. Hit `Next`, hit `Add Current User` to add an administator
12. Hit `Next`
13. Hit `Next`
14. Wait for this to finish, then install SQL Management Studio [sql studio](https://go.microsoft.com/fwlink/?LinkID=840946)

#### Import the database

1. Download the .Bak file [from here](https://msftdbprodsamples.codeplex.com/downloads/get/880661)
2. In SQL Server Management Studio, connect to the SQL server we just made
3. Right click `Databases`
4. Click `Restore Database...`
![image](https://i.imgur.com/zo08k2N.png)
5. Select `Device:`, then hit the button with the 3 dots
6. Click add and select the .Bak file we just downloaded
7. Hit `OK`

### MySQL

En ook MySQL ( [Download Link](https://dev.mysql.com/get/Downloads/MySQLInstaller/mysql-installer-community-5.7.18.1.msi) )

#### Installation process: 

1. Accept the terms, hit `Next`
2. Make sure `Developer Default` is selected and hit `Next`
3. Fix any issues that might appear (most likely MySQL for Excel and an issue with Python [download for v3.4.4](https://www.python.org/ftp/python/3.4.4/python-3.4.4.amd64.msi)) and hit `Next`
4. Click `Execute` to install all the stuff
5. Hit `Next`
6. Hit `Next`
7. Make sure it's set to Standalone MySQL Server and hit `Next`
8. Just keep it at `Development Machine` and hit `Next`
9. Add passwords, make a user and hit `Next`
10. Keep all the settings on default and hit `Next`
11. Hit `Next`
12. Hit `Execute`
13. Hit `Finish`
14. Hit `Next`
15. Hit `Finish`
16. Hit `Check` then hit `Next`
17. Hit `Execute`
18. Hit `Finish`
19. Hit `Next`

#### Import the database

1. Download the SQL dump file provided [here](AWBackup.sql)
2. In MySQL Workbench, connect to a database (one should already be made)
3. On the left, click `Data Import/Restore`
4. Select `Import from Self-Contained File` and select the sql script you just downloaded
5. Hit `Start Import` on the bottom right
6. Refresh the `Schemas` for it to show the adventure works database
