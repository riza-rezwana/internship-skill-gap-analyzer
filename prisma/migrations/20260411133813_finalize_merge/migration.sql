/*
  Warnings:

  - You are about to drop the column `companyName` on the `internship` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `internship` table. All the data in the column will be lost.
  - You are about to drop the column `duration` on the `internship` table. All the data in the column will be lost.
  - You are about to drop the column `field` on the `internship` table. All the data in the column will be lost.
  - You are about to drop the column `mode` on the `internship` table. All the data in the column will be lost.
  - Added the required column `companyId` to the `Internship` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roleDescription` to the `Internship` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Internship` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Internship` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `internship` DROP COLUMN `companyName`,
    DROP COLUMN `description`,
    DROP COLUMN `duration`,
    DROP COLUMN `field`,
    DROP COLUMN `mode`,
    ADD COLUMN `additionalPreferences` TEXT NULL,
    ADD COLUMN `companyId` INTEGER NOT NULL,
    ADD COLUMN `department` VARCHAR(191) NULL,
    ADD COLUMN `durationMonths` INTEGER NULL,
    ADD COLUMN `graduationYearRange` VARCHAR(191) NULL,
    ADD COLUMN `learningOutcomes` TEXT NULL,
    ADD COLUMN `minimumDegreeLevel` VARCHAR(191) NULL,
    ADD COLUMN `minimumGpaPercentage` VARCHAR(191) NULL,
    ADD COLUMN `numberOfPositions` INTEGER NOT NULL DEFAULT 1,
    ADD COLUMN `preferredFieldOfStudy` VARCHAR(191) NULL,
    ADD COLUMN `requiredSkills` TEXT NULL,
    ADD COLUMN `roleDescription` TEXT NOT NULL,
    ADD COLUMN `status` VARCHAR(191) NOT NULL DEFAULT 'ACTIVE',
    ADD COLUMN `stipend` DOUBLE NULL,
    ADD COLUMN `title` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD COLUMN `workMode` VARCHAR(191) NULL,
    MODIFY `location` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Company` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `companyName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `registrationNumber` VARCHAR(191) NULL,
    `industrySector` VARCHAR(191) NULL,
    `companySize` VARCHAR(191) NULL,
    `companyDescription` TEXT NULL,
    `companyWebsite` VARCHAR(191) NULL,
    `contactPersonName` VARCHAR(191) NULL,
    `designation` VARCHAR(191) NULL,
    `phoneNumber` VARCHAR(191) NULL,
    `officeAddress` TEXT NULL,
    `registrationCertificate` VARCHAR(191) NULL,
    `gstCertificate` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Company_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Internship` ADD CONSTRAINT `Internship_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
