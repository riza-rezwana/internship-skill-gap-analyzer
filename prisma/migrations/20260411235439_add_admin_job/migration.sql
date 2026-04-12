/*
  Warnings:

  - You are about to drop the `companylisting` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `companylisting` DROP FOREIGN KEY `companylisting_companyId_fkey`;

-- DropTable
DROP TABLE `companylisting`;

-- CreateTable
CREATE TABLE `adminjob` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `companyName` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NULL,
    `remote` BOOLEAN NOT NULL DEFAULT false,
    `sector` VARCHAR(191) NULL,
    `description` TEXT NULL,
    `applyLink` VARCHAR(191) NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
