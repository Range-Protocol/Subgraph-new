// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal,
} from "@graphprotocol/graph-ts";

export class Vault extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Vault entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Vault must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("Vault", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): Vault | null {
    return changetype<Vault | null>(
      store.get_in_block("Vault", id.toHexString()),
    );
  }

  static load(id: Bytes): Vault | null {
    return changetype<Vault | null>(store.get("Vault", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get name(): string {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get pool(): Bytes {
    let value = this.get("pool");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set pool(value: Bytes) {
    this.set("pool", Value.fromBytes(value));
  }

  get tokenX(): Bytes {
    let value = this.get("tokenX");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set tokenX(value: Bytes) {
    this.set("tokenX", Value.fromBytes(value));
  }

  get tokenY(): Bytes {
    let value = this.get("tokenY");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set tokenY(value: Bytes) {
    this.set("tokenY", Value.fromBytes(value));
  }

  get tokenXName(): string {
    let value = this.get("tokenXName");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set tokenXName(value: string) {
    this.set("tokenXName", Value.fromString(value));
  }

  get tokenYName(): string {
    let value = this.get("tokenYName");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set tokenYName(value: string) {
    this.set("tokenYName", Value.fromString(value));
  }

  get isPassive(): boolean {
    let value = this.get("isPassive");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set isPassive(value: boolean) {
    this.set("isPassive", Value.fromBoolean(value));
  }

  get tag(): string {
    let value = this.get("tag");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set tag(value: string) {
    this.set("tag", Value.fromString(value));
  }

  get liquidity(): BigInt {
    let value = this.get("liquidity");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set liquidity(value: BigInt) {
    this.set("liquidity", Value.fromBigInt(value));
  }

  get totalSupply(): BigInt {
    let value = this.get("totalSupply");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set totalSupply(value: BigInt) {
    this.set("totalSupply", Value.fromBigInt(value));
  }

  get manager(): Bytes {
    let value = this.get("manager");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set manager(value: Bytes) {
    this.set("manager", Value.fromBytes(value));
  }

  get managingFee(): BigInt {
    let value = this.get("managingFee");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set managingFee(value: BigInt) {
    this.set("managingFee", Value.fromBigInt(value));
  }

  get performanceFee(): BigInt {
    let value = this.get("performanceFee");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set performanceFee(value: BigInt) {
    this.set("performanceFee", Value.fromBigInt(value));
  }

  get managerBalanceX(): BigInt {
    let value = this.get("managerBalanceX");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set managerBalanceX(value: BigInt) {
    this.set("managerBalanceX", Value.fromBigInt(value));
  }

  get managerBalanceY(): BigInt {
    let value = this.get("managerBalanceY");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set managerBalanceY(value: BigInt) {
    this.set("managerBalanceY", Value.fromBigInt(value));
  }

  get balance0(): BigInt {
    let value = this.get("balance0");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set balance0(value: BigInt) {
    this.set("balance0", Value.fromBigInt(value));
  }

  get balance1(): BigInt {
    let value = this.get("balance1");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set balance1(value: BigInt) {
    this.set("balance1", Value.fromBigInt(value));
  }

  get totalFeesEarned0(): BigInt {
    let value = this.get("totalFeesEarned0");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set totalFeesEarned0(value: BigInt) {
    this.set("totalFeesEarned0", Value.fromBigInt(value));
  }

  get totalFeesEarned1(): BigInt {
    let value = this.get("totalFeesEarned1");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set totalFeesEarned1(value: BigInt) {
    this.set("totalFeesEarned1", Value.fromBigInt(value));
  }

  get firstMintAtBlock(): BigInt {
    let value = this.get("firstMintAtBlock");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set firstMintAtBlock(value: BigInt) {
    this.set("firstMintAtBlock", Value.fromBigInt(value));
  }

  get inThePosition(): boolean {
    let value = this.get("inThePosition");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set inThePosition(value: boolean) {
    this.set("inThePosition", Value.fromBoolean(value));
  }

  get currentPosition(): string | null {
    let value = this.get("currentPosition");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set currentPosition(value: string | null) {
    if (!value) {
      this.unset("currentPosition");
    } else {
      this.set("currentPosition", Value.fromString(<string>value));
    }
  }

  get currentPositionIdInVault(): Bytes | null {
    let value = this.get("currentPositionIdInVault");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set currentPositionIdInVault(value: Bytes | null) {
    if (!value) {
      this.unset("currentPositionIdInVault");
    } else {
      this.set("currentPositionIdInVault", Value.fromBytes(<Bytes>value));
    }
  }

  get positionCount(): BigInt {
    let value = this.get("positionCount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set positionCount(value: BigInt) {
    this.set("positionCount", Value.fromBigInt(value));
  }

  get feeEarnedEventCount(): BigInt {
    let value = this.get("feeEarnedEventCount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set feeEarnedEventCount(value: BigInt) {
    this.set("feeEarnedEventCount", Value.fromBigInt(value));
  }

  get uniqueKey(): BigInt {
    let value = this.get("uniqueKey");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set uniqueKey(value: BigInt) {
    this.set("uniqueKey", Value.fromBigInt(value));
  }

  get positions(): PositionLoader {
    return new PositionLoader(
      "Vault",
      this.get("id")!.toBytes().toHexString(),
      "positions",
    );
  }

  get feeEarnedEvents(): FeeEarnedLoader {
    return new FeeEarnedLoader(
      "Vault",
      this.get("id")!.toBytes().toHexString(),
      "feeEarnedEvents",
    );
  }

  get mints(): MintLoader {
    return new MintLoader(
      "Vault",
      this.get("id")!.toBytes().toHexString(),
      "mints",
    );
  }

  get burns(): BurnLoader {
    return new BurnLoader(
      "Vault",
      this.get("id")!.toBytes().toHexString(),
      "burns",
    );
  }

  get swaps(): SwapLoader {
    return new SwapLoader(
      "Vault",
      this.get("id")!.toBytes().toHexString(),
      "swaps",
    );
  }

  get lastUserIndex(): BigInt {
    let value = this.get("lastUserIndex");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set lastUserIndex(value: BigInt) {
    this.set("lastUserIndex", Value.fromBigInt(value));
  }

  get userBalances(): UserVaultBalanceLoader {
    return new UserVaultBalanceLoader(
      "Vault",
      this.get("id")!.toBytes().toHexString(),
      "userBalances",
    );
  }
}

export class Position extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Position entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Position must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("Position", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Position | null {
    return changetype<Position | null>(store.get_in_block("Position", id));
  }

  static load(id: string): Position | null {
    return changetype<Position | null>(store.get("Position", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenXAmount(): BigInt {
    let value = this.get("tokenXAmount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set tokenXAmount(value: BigInt) {
    this.set("tokenXAmount", Value.fromBigInt(value));
  }

  get tokenYAmount(): BigInt {
    let value = this.get("tokenYAmount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set tokenYAmount(value: BigInt) {
    this.set("tokenYAmount", Value.fromBigInt(value));
  }

  get tokenXWithdrawn(): BigInt {
    let value = this.get("tokenXWithdrawn");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set tokenXWithdrawn(value: BigInt) {
    this.set("tokenXWithdrawn", Value.fromBigInt(value));
  }

  get tokenYWithdrawn(): BigInt {
    let value = this.get("tokenYWithdrawn");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set tokenYWithdrawn(value: BigInt) {
    this.set("tokenYWithdrawn", Value.fromBigInt(value));
  }

  get priceSqrtAtOpening(): BigInt {
    let value = this.get("priceSqrtAtOpening");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set priceSqrtAtOpening(value: BigInt) {
    this.set("priceSqrtAtOpening", Value.fromBigInt(value));
  }

  get priceSqrtAtClosing(): BigInt {
    let value = this.get("priceSqrtAtClosing");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set priceSqrtAtClosing(value: BigInt) {
    this.set("priceSqrtAtClosing", Value.fromBigInt(value));
  }

  get lowerTick(): BigInt {
    let value = this.get("lowerTick");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set lowerTick(value: BigInt) {
    this.set("lowerTick", Value.fromBigInt(value));
  }

  get upperTick(): BigInt {
    let value = this.get("upperTick");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set upperTick(value: BigInt) {
    this.set("upperTick", Value.fromBigInt(value));
  }

  get feesEarned0(): BigInt {
    let value = this.get("feesEarned0");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set feesEarned0(value: BigInt) {
    this.set("feesEarned0", Value.fromBigInt(value));
  }

  get feesEarned1(): BigInt {
    let value = this.get("feesEarned1");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set feesEarned1(value: BigInt) {
    this.set("feesEarned1", Value.fromBigInt(value));
  }

  get vault(): Bytes {
    let value = this.get("vault");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set vault(value: Bytes) {
    this.set("vault", Value.fromBytes(value));
  }

  get openedAtTimestamp(): BigInt {
    let value = this.get("openedAtTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set openedAtTimestamp(value: BigInt) {
    this.set("openedAtTimestamp", Value.fromBigInt(value));
  }

  get closedAtTimestamp(): BigInt {
    let value = this.get("closedAtTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set closedAtTimestamp(value: BigInt) {
    this.set("closedAtTimestamp", Value.fromBigInt(value));
  }

  get openedATBlock(): BigInt {
    let value = this.get("openedATBlock");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set openedATBlock(value: BigInt) {
    this.set("openedATBlock", Value.fromBigInt(value));
  }

  get closedAtBlock(): BigInt {
    let value = this.get("closedAtBlock");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set closedAtBlock(value: BigInt) {
    this.set("closedAtBlock", Value.fromBigInt(value));
  }
}

export class FeeEarned extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save FeeEarned entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type FeeEarned must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("FeeEarned", id.toString(), this);
    }
  }

  static loadInBlock(id: string): FeeEarned | null {
    return changetype<FeeEarned | null>(store.get_in_block("FeeEarned", id));
  }

  static load(id: string): FeeEarned | null {
    return changetype<FeeEarned | null>(store.get("FeeEarned", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get amountX(): BigInt | null {
    let value = this.get("amountX");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set amountX(value: BigInt | null) {
    if (!value) {
      this.unset("amountX");
    } else {
      this.set("amountX", Value.fromBigInt(<BigInt>value));
    }
  }

  get amountY(): BigInt | null {
    let value = this.get("amountY");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set amountY(value: BigInt | null) {
    if (!value) {
      this.unset("amountY");
    } else {
      this.set("amountY", Value.fromBigInt(<BigInt>value));
    }
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get vault(): Bytes {
    let value = this.get("vault");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set vault(value: Bytes) {
    this.set("vault", Value.fromBytes(value));
  }
}

export class User extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type User must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("User", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): User | null {
    return changetype<User | null>(
      store.get_in_block("User", id.toHexString()),
    );
  }

  static load(id: Bytes): User | null {
    return changetype<User | null>(store.get("User", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get vaultBalances(): UserVaultBalanceLoader {
    return new UserVaultBalanceLoader(
      "User",
      this.get("id")!.toBytes().toHexString(),
      "vaultBalances",
    );
  }
}

export class UserVaultBalance extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save UserVaultBalance entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type UserVaultBalance must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("UserVaultBalance", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): UserVaultBalance | null {
    return changetype<UserVaultBalance | null>(
      store.get_in_block("UserVaultBalance", id.toHexString()),
    );
  }

  static load(id: Bytes): UserVaultBalance | null {
    return changetype<UserVaultBalance | null>(
      store.get("UserVaultBalance", id.toHexString()),
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get balance(): BigInt {
    let value = this.get("balance");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set balance(value: BigInt) {
    this.set("balance", Value.fromBigInt(value));
  }

  get tokenX(): BigInt {
    let value = this.get("tokenX");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set tokenX(value: BigInt) {
    this.set("tokenX", Value.fromBigInt(value));
  }

  get tokenY(): BigInt {
    let value = this.get("tokenY");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set tokenY(value: BigInt) {
    this.set("tokenY", Value.fromBigInt(value));
  }

  get userIndex(): BigInt {
    let value = this.get("userIndex");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set userIndex(value: BigInt) {
    this.set("userIndex", Value.fromBigInt(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get vault(): Bytes {
    let value = this.get("vault");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set vault(value: Bytes) {
    this.set("vault", Value.fromBytes(value));
  }
}

export class Swap extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Swap entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Swap must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("Swap", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Swap | null {
    return changetype<Swap | null>(store.get_in_block("Swap", id));
  }

  static load(id: string): Swap | null {
    return changetype<Swap | null>(store.get("Swap", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get zeroForOne(): boolean {
    let value = this.get("zeroForOne");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set zeroForOne(value: boolean) {
    this.set("zeroForOne", Value.fromBoolean(value));
  }

  get amountX(): BigInt {
    let value = this.get("amountX");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set amountX(value: BigInt) {
    this.set("amountX", Value.fromBigInt(value));
  }

  get amountY(): BigInt {
    let value = this.get("amountY");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set amountY(value: BigInt) {
    this.set("amountY", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get vault(): Bytes {
    let value = this.get("vault");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set vault(value: Bytes) {
    this.set("vault", Value.fromBytes(value));
  }
}

export class Mint extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Mint entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Mint must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("Mint", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Mint | null {
    return changetype<Mint | null>(store.get_in_block("Mint", id));
  }

  static load(id: string): Mint | null {
    return changetype<Mint | null>(store.get("Mint", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get receiver(): Bytes {
    let value = this.get("receiver");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set receiver(value: Bytes) {
    this.set("receiver", Value.fromBytes(value));
  }

  get mintAmount(): BigInt {
    let value = this.get("mintAmount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set mintAmount(value: BigInt) {
    this.set("mintAmount", Value.fromBigInt(value));
  }

  get amountXIn(): BigInt {
    let value = this.get("amountXIn");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set amountXIn(value: BigInt) {
    this.set("amountXIn", Value.fromBigInt(value));
  }

  get amountYIn(): BigInt {
    let value = this.get("amountYIn");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set amountYIn(value: BigInt) {
    this.set("amountYIn", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get txHash(): Bytes {
    let value = this.get("txHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set txHash(value: Bytes) {
    this.set("txHash", Value.fromBytes(value));
  }

  get vault(): Bytes {
    let value = this.get("vault");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set vault(value: Bytes) {
    this.set("vault", Value.fromBytes(value));
  }
}

export class Burn extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Burn entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Burn must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("Burn", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Burn | null {
    return changetype<Burn | null>(store.get_in_block("Burn", id));
  }

  static load(id: string): Burn | null {
    return changetype<Burn | null>(store.get("Burn", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get receiver(): Bytes {
    let value = this.get("receiver");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set receiver(value: Bytes) {
    this.set("receiver", Value.fromBytes(value));
  }

  get burnAmount(): BigInt {
    let value = this.get("burnAmount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set burnAmount(value: BigInt) {
    this.set("burnAmount", Value.fromBigInt(value));
  }

  get amountXOut(): BigInt {
    let value = this.get("amountXOut");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set amountXOut(value: BigInt) {
    this.set("amountXOut", Value.fromBigInt(value));
  }

  get amountYOut(): BigInt {
    let value = this.get("amountYOut");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set amountYOut(value: BigInt) {
    this.set("amountYOut", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get txHash(): Bytes {
    let value = this.get("txHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set txHash(value: Bytes) {
    this.set("txHash", Value.fromBytes(value));
  }

  get vault(): Bytes {
    let value = this.get("vault");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set vault(value: Bytes) {
    this.set("vault", Value.fromBytes(value));
  }
}

export class FeesUpdated extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save FeesUpdated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type FeesUpdated must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("FeesUpdated", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): FeesUpdated | null {
    return changetype<FeesUpdated | null>(
      store.get_in_block("FeesUpdated", id.toHexString()),
    );
  }

  static load(id: Bytes): FeesUpdated | null {
    return changetype<FeesUpdated | null>(
      store.get("FeesUpdated", id.toHexString()),
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get performanceFee(): BigInt {
    let value = this.get("performanceFee");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set performanceFee(value: BigInt) {
    this.set("performanceFee", Value.fromBigInt(value));
  }

  get managingFee(): BigInt {
    let value = this.get("managingFee");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set managingFee(value: BigInt) {
    this.set("managingFee", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class PositionLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): Position[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<Position[]>(value);
  }
}

export class FeeEarnedLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): FeeEarned[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<FeeEarned[]>(value);
  }
}

export class MintLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): Mint[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<Mint[]>(value);
  }
}

export class BurnLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): Burn[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<Burn[]>(value);
  }
}

export class SwapLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): Swap[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<Swap[]>(value);
  }
}

export class UserVaultBalanceLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): UserVaultBalance[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<UserVaultBalance[]>(value);
  }
}
