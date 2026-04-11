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

-- CreateTable
CREATE TABLE `Internship` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `companyId` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `department` VARCHAR(191) NULL,
    `location` VARCHAR(191) NULL,
    `workMode` VARCHAR(191) NULL,
    `durationMonths` INTEGER NULL,
    `stipend` DOUBLE NULL,
    `roleDescription` TEXT NOT NULL,
    `learningOutcomes` TEXT NULL,
    `numberOfPositions` INTEGER NOT NULL DEFAULT 1,
    `requiredSkills` TEXT NULL,
    `minimumDegreeLevel` VARCHAR(191) NULL,
    `preferredFieldOfStudy` VARCHAR(191) NULL,
    `minimumGpaPercentage` VARCHAR(191) NULL,
    `graduationYearRange` VARCHAR(191) NULL,
    `additionalPreferences` TEXT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'ACTIVE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Internship` ADD CONSTRAINT `Internship_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
