-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nisit_id" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Token" TEXT NOT NULL,
    "NameTH" TEXT NOT NULL,
    "SurnameTH" TEXT NOT NULL,
    "NameEN" TEXT NOT NULL
);
